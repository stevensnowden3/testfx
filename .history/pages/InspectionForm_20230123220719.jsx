import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import RemarksTable from '../components/remarksTable';
import paramData from '../components/paramData';
import { methods, sampleItems, itemsList } from '../components/dataitems';

import moment from 'moment';

import FileInput from '../components/FileInput';
import FileUpload from '../components/FileUpload ';

const InspectionForm = () => {
  const { user, isLoading } = useUser();

  const [file, setFile] = useState(null);

  // All Variables
  const [material_name, setMaterialName] = useState('');
  const [supplier_name, setSupplierName] = useState('');
  const [method_of_inspection, setMethodOfInspection] = useState('');
  const [material_received, setcontractNo] = useState('');
  const [total_inspected, setTotalInspected] = useState('');
  const [total_pass, setTotalPass] = useState('');
  const [total_failure, setTotalFailure] = useState('');
  const [delivery_note, setDeliveryNote] = useState('');
  const [sample_inspected, invoiceNo] = useState('');
  // dates
  const [delivery_date, setDeliveryDate] = useState('');
  const [inspection_date, setSelectedInspectionDate] = useState('');
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
  const items = itemsList.map(item => item);

  const [selectedSample, setSelectedSample] = useState(null);

  // const [material_name, setMaterialName] = useState(null);
  // const [method_of_inspection, setMethodOfInspection] = useState(null);

  const onCountryChange = e => {
    setSelectedCountry(e.value);
  };
  const onSampleChange = e => {
    setMaterialName(e.value);
  };
  const onMethodChange = e => {
    setMethodOfInspection(e.value);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);

  // tinymce
  const [editorContent, setEditorContent] = useState('');

  const handleEditorContent = content => {
    setEditorContent(content);
  };

  // submit the form to the database
  const handleSubmit = async e => {
    const remark = editorContent;
    if (
      !material_name ||
      !supplier_name ||
      !method_of_inspection ||
      !material_received ||
      !total_inspected ||
      !total_pass ||
      !total_failure ||
      !delivery_note ||
      !sample_inspected ||
      !delivery_date ||
      !inspection_date ||
      !remark
    ) {
      // setMessage('All fields are required');
      alert('All fields are required');
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
          material_received,
          total_inspected,
          total_pass,
          total_failure,
          delivery_note,
          sample_inspected,
          delivery_date: new Date().toISOString(),
          inspection_date: new Date().toISOString(),
          remark
        })
      });

      const data = await response.json();
      setMessage(data.message);
      alert('Data sent');
    } catch (error) {
      alert('Error');
      console.log(error);
    }
  };

  return (
    <>
      {isLoading && <Loading />}
      {user && user['https://netlify-integration.com/roles'].includes('MIT') && (
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
                        Name Material:
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
                        Delivery Date:
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
                        Supplier/Manufacturer:
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <InputText
                        id="supplier_name"
                        value={supplier_name}
                        onChange={e => setSupplierName(e.target.value)}
                      />
                    </div>
                  </div>
                </td>

                <td className="text-center" colSpan="2">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="Inspection" className="me-3">
                        Inspection Date:
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
                        Method of Inspection:
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <Dropdown
                        value={method_of_inspection}
                        options={method}
                        onChange={onMethodChange}
                        optionLabel="name"
                        placeholder="Method of Inspection"
                      />
                    </div>
                  </div>
                </td>

                <td className="text-center" colSpan="2">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="Inspection" className="me-3">
                        Delivery Note:
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <InputText
                        id="delivery_note"
                        placeholder="delivery note"
                        value={delivery_note}
                        onChange={e => setDeliveryNote(e.target.value)}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="text-start" colSpan="6">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="material_received" className="me-3">
                        Contract No:
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <InputNumber
                        inputId="integeronly"
                        value={material_received}
                        onValueChange={e => setcontractNo(e.value)}
                      />
                    </div>
                  </div>
                </td>

                <td className="text-center" colSpan="2">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="username" className="me-3">
                        Invoice No:
                      </label>
                    </div>
                    <div className="col-12 col-md-6">
                      <InputText
                        id="sample_inspected"
                        placeholder="Invoice no"
                        value={sample_inspected}
                        onChange={e => invoiceNo(e.target.value)}
                      />
                    </div>
                  </div>
                </td>
              </tr>
              <tr>
                <td className="" colSpan="6">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="username" className="me-3">
                        Total Inspected:
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

                <td className="text-center" colSpan="2">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="totalFailure" className="me-3">
                        Total Failuire:
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
                <td className="" colSpan="6">
                  <div className="d-flex flex-column flex-md-row">
                    {/* <div className="col-12 col-md-6">
                    <label htmlFor="username" className="me-3">
                      Total Pass:
                    </label>
                  </div>
                  <div className="col-12 col-md-6">
                    <InputNumber inputId="integeronly" value={total_pass} onValueChange={e => settotalPass(e.value)} />
                  </div> */}
                  </div>
                </td>
                <td className="text-center" colSpan="2">
                  <div className="d-flex flex-column flex-md-row">
                    <div className="col-12 col-md-6">
                      <label htmlFor="total_failure" className="me-3">
                        Total Pass:
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
                <td colSpan={8}>
                  <Divider align="center">
                    <span style={{ background: '#b5bd36', color: '#fff', borderRadius: '10px', padding: '5px' }}>
                      Inspection comment
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
                  {message && <p className="text-center text-success">{message}</p>}
                </td>
              </tr>
            </tbody>
          </table>
          {/* <span className="text-warning m-2">{textValue}</span> */}
          <table className="table table-bordered">
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
          </table>
          {/* <div dangerouslySetInnerHTML={{ __html: remark }} /> */}
          <div className="steps-demo m-5">
            <Toast ref={toast}></Toast>

            <div>
              <Steps model={items} activeIndex={activeIndex} onSelect={e => setActiveIndex(e.index)} readOnly={true} />
            </div>
          </div>
        </div>
      )}
      {!user ||
        (!user['https://netlify-integration.com/roles'].includes('MIT') && (
          <h3 className="text-center text-warning m-5">You dont have permissions to access this page</h3>
        ))}
    </>
  );
};

export default withPageAuthRequired(InspectionForm, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
