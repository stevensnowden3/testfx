import React, { useState, useEffect, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import RemarksTable from '../components/remarksTable';
import paramData from '../components/paramData';
import { methods, sampleItems, itemsList, sampleInspected, ROLES } from '../components/dataitems';
import { Steps } from 'primereact/steps';
import { setActiveIndex } from '../components/setIndexSteps'; //steps
import { Toast } from 'primereact/toast';
import ToastMessage from '../components/ToastMessage';

import moment from 'moment';

import FileInput from '../components/FileInput';
import FileUpload from '../components/FileUpload ';

const InspectionForm = () => {
  const { user, isLoading } = useUser();
  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const [file, setFile] = useState(null);

  // All Variables
  const [material_name, setMaterialName] = useState('');
  const [supplier_name, setSupplierName] = useState('');
  const [method_of_inspection, setMethodOfInspection] = useState('');
  const [sample_selection, setSampleSelection] = useState('');
  const [material_received, setcontractNo] = useState('');
  const [total_inspected, setTotalInspected] = useState('');
  const [total_pass, setTotalPass] = useState('');
  const [total_failure, setTotalFailure] = useState('');
  const [delivery_note, setDeliveryNote] = useState('');

  const [sample_inspected, setSampleInspected] = useState('');
  const [location, setLocation] = useState('');
  // dates
  const [delivery_date, setDeliveryDate] = useState(new Date());
  const [inspection_date, setSelectedInspectionDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(true);

  const [filename, setFilename] = useState('');

  const [message, setMessage] = useState('');

  // number fields

  // dates

  const handleChange = event => {
    const inputValue = event.target.value;
    if (!isNaN(inputValue) && inputValue !== '') {
      setValue(inputValue);
    }
  };
  // app Data in form of Imported arrays
  const sample = sampleItems.map(item => item);
  const method = methods.map(item => item);
  const sampleSelect = sampleInspected.map(item => item);

  // insert steps
  const [activeIndex, setActiveStep] = useState(1);
  useEffect(() => {
    setActiveIndex(user, setActiveStep);
  }, [user]);
  const items = itemsList.map(item => item);

  const [selectedSample, setSelectedSample] = useState(null);

  const onSampleChange = e => {
    setMaterialName(e.value);
  };
  const onMethodChange = e => {
    setMethodOfInspection(e.value);
  };
  const sampleSelectionChange = e => {
    setSampleSelection(e.value);
  };

  // tinymce
  const [editorContent, setEditorContent] = useState('');

  const handleEditorContent = content => {
    setEditorContent(content);
  };

  // submit the form to the database
  const handleSubmit = async e => {
    const remark = editorContent;
    const created_by = user.email;
    if (
      !material_name ||
      !supplier_name ||
      !method_of_inspection ||
      !sample_selection ||
      !location ||
      !material_received ||
      !total_inspected ||
      !total_pass ||
      !delivery_note ||
      !sample_inspected ||
      !inspection_date ||
      !remark
    ) {
      // setMessage('All fields are required');
      setShowError(true);
      setTimeout(() => {
        setShowError(false);
      }, 100);

      // showError();
      alert(created_by);
      return;
    }
    try {
      const response = await fetch('/api/addData', {
        method: 'POST',

        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          material_name,
          supplier_name,
          method_of_inspection,
          sample_selection,
          location,
          material_received,
          total_inspected,
          total_pass,
          total_failure,
          delivery_note,
          sample_inspected,
          delivery_date,
          inspection_date,
          remark,
          created_by
        })
      });

      const data = await response.json();

      setMessage(data.message);
      // clear the fields
      setMaterialName('');
      setSupplierName('');
      setMethodOfInspection('');
      setSampleSelection('');
      setcontractNo('');
      setTotalInspected('');
      setTotalPass('');
      setTotalFailure('');
      setDeliveryNote('');
      setSampleInspected('');
      setLocation('');

      // show success toast
      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
      }, 100);

      // alert('Data sent');
      console.log('data sent');
    } catch (error) {
      alert('Error');
      console.log(error);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      {user && user[ROLES].includes('MIT') && (
        <div className="container">
          <table className="table table-bordered ">
            <thead className="">
              <tr style={{ background: '#b5bd36', color: '#fff' }}>
                <th className="text-center" colSpan="8">
                  <h1> Material Inspection System</h1>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="text-start" colSpan="6">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="Material" className="">
                        Name Material:<span className="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <Dropdown
                        value={material_name}
                        options={sample}
                        onChange={onSampleChange}
                        optionLabel="name"
                        filter
                        showClear
                        filterBy="name"
                        placeholder="Select a Material"
                      />
                    </div>
                  </div>
                </td>

                <td className="text-center" colSpan="2">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="Delivery" className="me-3">
                        Delivery Date:<span className="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      {showCalendar && <Calendar value={delivery_date} onChange={e => setDeliveryDate(e.value)} />}
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-start" colSpan="6">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="supplier_name" className="me-3">
                        Supplier/Manufacturer:<span className="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <InputText
                        id="supplier_name"
                        value={supplier_name}
                        onChange={e => setSupplierName(e.target.value)}
                        placeholder="e.g ABC Suppliers"
                        required
                      />
                    </div>
                  </div>
                </td>

                <td className="text-center" colSpan="2">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="Inspection" className="me-3">
                        Inspection Date:<span className="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      {showCalendar && (
                        <Calendar value={inspection_date} onChange={e => setSelectedInspectionDate(e.value)} />
                      )}
                    </div>
                  </div>
                </td>
              </tr>

              <tr>
                <td className="text-start" colSpan="6">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="Inspection" className="me-3">
                        Method of Inspection:<span className="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <Dropdown
                        value={method_of_inspection}
                        options={method}
                        onChange={onMethodChange}
                        optionLabel="name"
                        placeholder="Method of Inspection"
                        required
                      />
                    </div>
                  </div>
                </td>

                <td className="text-center" colSpan="2">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="material_received" className="me-3">
                        Contract Number: <span className="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <InputNumber
                        inputId="integeronly"
                        value={material_received}
                        onValueChange={e => setcontractNo(e.value)}
                        required
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-start" colSpan="6">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="Inspection" className="me-3">
                        Delivery Note:<span className="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <InputText
                        id="delivery_note"
                        placeholder="Enter delivery note"
                        value={delivery_note}
                        onChange={e => setDeliveryNote(e.target.value)}
                      />
                    </div>
                  </div>
                </td>

                {/* <td className="text-center" colSpan="2">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="username" className="me-3">
                        Invoice No:<span className="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <InputText
                        id="sample_inspected"
                        placeholder="Enter Invoice number"
                        value={sample_inspected}
                        onChange={e => invoiceNo(e.target.value)}
                      />
                    </div>
                  </div>
                </td> */}
                <td className="text-center" colSpan="2">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="username" className="me-3">
                        Total Inspected:<span className="text-danger">*</span>
                      </label>
                    </div>

                    <div className="col-12 col-md-6">
                      <InputNumber
                        inputId="integeronly"
                        value={total_inspected}
                        onValueChange={e => setTotalInspected(e.value)}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="" colSpan="6">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="Inspection" className="me-3">
                        Sample Inspected:<span className="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <InputText
                        id="sample_inspected"
                        placeholder=" e.g  46/80"
                        value={sample_inspected}
                        onChange={e => setSampleInspected(e.target.value)}
                      />
                    </div>
                  </div>
                </td>

                <td className="text-center" colSpan="2">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="totalFailure" className="me-3">
                        Total Failure:<span className="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <InputNumber
                        inputId="integeronly"
                        value={total_failure}
                        onValueChange={e => setTotalFailure(e.value)}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text- start" colSpan="6">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="Inspection" className="me-3">
                        Whole/Sample Selection:<span className="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <Dropdown
                        value={sample_selection}
                        options={sampleSelect}
                        onChange={sampleSelectionChange}
                        optionLabel="name"
                        placeholder="Whole/Sample"
                        required
                      />
                      {/* {sample_selection ? sample_selection.name : 'none'} */}
                    </div>
                  </div>
                </td>
                <td className="text-center" colSpan="2">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="total_failure" className="me-3">
                        Total Pass:<span className="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <InputNumber
                        inputId="integeronly"
                        value={total_pass}
                        onValueChange={e => setTotalPass(e.value)}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-start" colSpan="4">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="Inspection" className="mt-2">
                        Location:<span className="text-danger">*</span>
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <InputText
                        id="location"
                        placeholder=" e.g  Metro"
                        value={location}
                        onChange={e => setLocation(e.target.value)}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td colSpan={8}>
                  <Divider align="center">
                    <span style={{ background: '#b5bd36', color: '#fff', borderRadius: '10px', padding: '5px' }}>
                      Inspection comments
                    </span>
                  </Divider>
                </td>
              </tr>

              <tr>
                <td colSpan={2}>
                  <div>
                    <FileInput onChange={setFile} />
                  </div>
                </td>
                <td colSpan={1}>
                  <div className="text-center">
                    <FileUpload file={file} />
                  </div>
                </td>
                <td colSpan={5}>
                  <div className="text-center">
                    <p>
                      <span className="text-danger">src={file}</span>
                      Select individual documents and Click the "Upload" button to upload the document(s) to the system
                    </p>
                  </div>
                </td>
              </tr>

              <RemarksTable
                selectedSample={material_name}
                param={paramData}
                handleEditorContent={handleEditorContent}
              />
              <tr>
                <td colSpan={8}>
                  <div>
                    {/* <div className="card ">
                    <h6>Remarks/Comments (Indicated the Total quantities passed/Failed)</h6>
                    <Editor style={{ height: '150px' }} value={remarks} onTextChange={e => setRemarks(e.htmlValue)} />
                  </div> */}
                    {/* <div dangerouslySetInnerHTML={{__html: text1}} /> */}

                    <ToastMessage showSuccess={showSuccess} showError={showError} />
                    <div className="text-end  ">
                      <Button
                        label="Submit"
                        className="p-button-raised p-button-text me-2"
                        style={{ background: '#b5bd36', color: '#fff' }}
                        onClick={handleSubmit}
                      />
                      <Button label="Cancel" className="p-button-raised p-button-danger p-button-text" />
                    </div>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
          {message && <p className="text-center text-success">{message}</p>}
          {/* Display dummy data in text field */}
          {/* <span className="text-warning m-2">{textValue}</span> */}
          {/* <table className="table table-bordered">
            <tbody>
              <tr>
                <td>
                  Metho:
                  <span className="me-2 text-warning">{method_of_inspection ? method_of_inspection.name : 'none'}</span>
                </td>
                <td>
                  Sample: <span className="me-2 text-warning">{material_name ? material_name.name : 'none'}</span>
                </td>
                <td>
                  InsDate
                  <span className="text-success m-2 ">
                    {inspection_date ? moment(inspection_date).fromNow() : 'none'}
                  </span>
                </td>
                <td>
                  DelDate
                  <span className="text-warning m-2 ">{delivery_date ? moment(delivery_date).fromNow() : 'none'}</span>
                </td>
                <td>
                  Supplier- <span className="text-warning m-2 ">{supplier_name}</span>
                </td>
                <td>
                  DelNote- <span className="text-warning m-2 ">{delivery_note}</span>
                </td>
                <td>
                  invoice- <span className="text-warning m-2 ">{sample_inspected}</span>
                </td>
                <td>
                  P-{total_pass} .. F-{total_failure} .. Total-{total_inspected}
                </td>
              </tr>
              <tr>
                <td colSpan={8}>
                  <p>wait for it</p> P-{total_pass} .. F-{total_failure} .. Total-{total_inspected}
                  <div dangerouslySetInnerHTML={{ __html: editorContent }} />
                </td>
              </tr>
            </tbody>
          </table> */}
          {/* <div dangerouslySetInnerHTML={{ __html: remark }} /> */}
          <div className="steps-demo m-5">
            <div>
              <Steps model={items} activeIndex={activeIndex} onSelect={e => setActiveIndex(e.index)} readOnly={true} />
            </div>
          </div>
        </div>
      )}
      {!user ||
        (!user[ROLES].includes('MIT') && (
          <>
            <h3 className="text-center text-warning m-5">You dont have permissions to access this page</h3>
            <h3 className="text-center text-warning m-5">Request for permissions</h3>
          </>
        ))}
    </>
  );
};

export default withPageAuthRequired(InspectionForm, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
