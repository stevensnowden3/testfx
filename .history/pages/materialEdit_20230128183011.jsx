import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { setActiveIndex } from '../components/setIndexSteps';
import { itemsList } from '../components/dataitems';

import React, { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import moment from 'moment';

import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import { Dropdown } from 'primereact/dropdown';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import RemarksTable from '../components/remarksTable';
import paramData from '../components/paramData';
import { methods, sampleItems } from '../components/dataitems';

const View = () => {
  const { user, isLoading } = useUser();

  const [item, setItem] = useState({});
  const router = useRouter();

  // Fetch the item from the API
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`/api/checklist/${router.query.id}`);
        setItem(response.data.data[0]);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  // insert steps
  const [activeIndex, setActiveStep] = useState(1);
  useEffect(() => {
    setActiveIndex(user, setActiveStep);
  }, [user]);
  const items = itemsList.map(item => item);

  // app Data in form of Imported arrays
  const sample = sampleItems.map(item => item);
  const method = methods.map(item => item);
  const [selectedSample, setSelectedSample] = useState(null);

  // variables

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
  const [delivery_date, setDeliveryDate] = useState(new Date());
  const [inspection_date, setSelectedInspectionDate] = useState(new Date());
  const [showCalendar, setShowCalendar] = useState(true);

  const [filename, setFilename] = useState('');

  const [message, setMessage] = useState('');

  // fxns
  const onSampleChange = e => {
    setMaterialName(e.value);
  };
  const onMethodChange = e => {
    setMethodOfInspection(e.value);
  };

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
          delivery_date,
          inspection_date,
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
    <div>
      {isLoading && <Loading />}
      {user && user['https://netlify-integration.com/roles'].includes('TCO') && (
        <>
          <h2 className="text-center mb-2" style={{ color: '#04392a' }}>
            INDIVIDUAL MATERIAL DETAILS
          </h2>
          {item ? (
            <div className=" container m-5">
              <p>Material Name: {item.material_name}</p>
              <p>Supplier Name: {item.supplier_name}</p>
              <p>Method of Inspection: {item.method_of_inspection}</p>
              <p>Contact Number: {item.material_received}</p>
              <p>Total Failure: {item.total_failure}</p>
              <p>Delivery Note: {item.delivery_note}</p>
              <p>Sample Inspected: {item.sample_inspected}</p>
              <p>Inspection Date: {moment(item.inspection_date).format('MMMM, Do hA')} </p>
              <p>Delivery Date: {moment(item.inspection_date).format('MMMM, Do hA')}</p>
              <div className="bg-light ">
                <div className="mx-5" dangerouslySetInnerHTML={{ __html: item.remark }} />
              </div>

              <div className="text-center mt-5 ">
                <Button
                  className="p-button-raised  p-button-text me-2 "
                  style={{ background: '#b5bd36', color: '#fff' }}
                  aria-label="download pdf">
                  <i className="pi pi-check-circle "></i>
                  <span className="px-3">Approve</span>
                </Button>
                <Button className="p-button-raised p-button-danger p-button-text " aria-label="download pdf">
                  <i className="pi pi-times-circle "></i>
                  <span className="px-3">Reject</span>
                </Button>
              </div>
              <div className="mt-5">
                <Steps
                  model={items}
                  activeIndex={activeIndex}
                  onSelect={e => setActiveIndex(e.index)}
                  readOnly={true}
                />
              </div>
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
                                  value={item.material_name}
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
                                {showCalendar && (
                                  <Calendar value={delivery_date} onChange={e => setDeliveryDate(e.value)} />
                                )}
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
                                  <Calendar
                                    value={inspection_date}
                                    onChange={e => setSelectedInspectionDate(e.value)}
                                  />
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
                                  placeholder="Enter delivery note"
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
                                  placeholder="Enter Invoice number"
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
                              <span
                                style={{ background: '#b5bd36', color: '#fff', borderRadius: '10px', padding: '5px' }}>
                                Inspection comment
                              </span>
                            </Divider>
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
                        <Steps
                          model={items}
                          activeIndex={activeIndex}
                          onSelect={e => setActiveIndex(e.index)}
                          readOnly={true}
                        />
                      </div>
                    </div>
                  </div>
                )}
                {!user ||
                  (!user['https://netlify-integration.com/roles'].includes('MIT') && (
                    <h3 className="text-center text-warning m-5">You dont have permissions to access this page</h3>
                  ))}
              </>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </>
      )}
      {!user['https://netlify-integration.com/roles'].includes('TCO') ||
        (user['https://netlify-integration.com/roles'].includes('T') && (
          <p className="text-center text-warning m-5">You dont have permissions to access this route</p>
        ))}
    </div>
  );
};

export default withPageAuthRequired(View, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
