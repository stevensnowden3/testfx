import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Divider } from 'primereact/divider';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { InputNumber } from 'primereact/inputnumber';
import { Calendar } from 'primereact/calendar';
import Hero from '../components/params';
import paramData from '../components/paramData';
import { methods, sampleItems, itemsList } from '../components/dataitems';

import moment from 'moment';

import FileInput from '../components/FileInput';
import FileUpload from '../components/FileUpload ';

const form = () => {
  const [file, setFile] = useState(null);
  const [selectedCity1, setSelectedCity1] = useState(null);
  const [checked1, setChecked1] = useState(false);
  const [textValue, setTextValue] = useState('');

  const [supplier, setSuppliername] = useState('');
  const [deliverynote, setDeliveryNote] = useState('');
  const [invoice, invoiceNo] = useState('');

  const [remarks, setRemarks] = useState('<div></div>');

  // number fields
  const [totalinspected, settotalinspected] = useState('');
  const [totalFailure, settotalFailure] = useState('');
  const [totalPass, settotalPass] = useState('');
  const [contractNo, setcontractNo] = useState('');

  const [selectedDate, setSelectedDate] = useState(null);
  // const [selectedDeliveryDate, setSelectedDeliveryDate] = useState(null);
  const [deliveryDate, setdeliveryDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(true);

  // dates
  const [selecteddeliveryDate, setSelecteddeliveryDate] = useState(null);
  const [selectedInspectionDate, setSelectedInspectionDate] = useState(null);
  const onDateSelect = e => {
    setSelectedDate(e.value);
    setShowCalendar(false);
    setShowCalendar(true);
  };
  const onDeliveryDate = e => {
    setSelectedDeliveryDate(e.value);
    setShowCalendar(false);
    setShowCalendar(true);
  };
  const ondeliveryDateSelect = e => {
    setdeliveryDate(e.value);
    setShowCalendar(false);
    setShowCalendar(true);
  };

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

  const [selectedCountry, setSelectedCountry] = useState(null);
  const [selectedSample, setSelectedSample] = useState(null);
  const [selectedMethod, setSelectedMethod] = useState(null);

  const onCountryChange = e => {
    setSelectedCountry(e.value);
  };
  const onSampleChange = e => {
    setSelectedSample(e.value);
  };
  const onMethodChange = e => {
    setSelectedMethod(e.value);
  };

  const [activeIndex, setActiveIndex] = useState(0);
  const toast = useRef(null);

  return (
    <>
      <table className="table table-bordered">
        <thead className="">
          <tr style={{ background: '#b5bd36', color: '#fff' }}>
            <th className="text-center" colSpan="8">
              <h1> Material Quality Inspection Report</h1>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="text-start" colSpan="6">
              <div className="col-12 md:col-4">
                <div>
                  <label htmlFor="Material" className="me-3">
                    Name Material:
                  </label>
                  <Dropdown
                    value={selectedSample}
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

            <td className="text-start" colSpan="2">
              <div className="col-12 md:col-4">
                <div>
                  <label htmlFor="Delivery" className="me-3">
                    Delivery Date:
                  </label>

                  {showCalendar && (
                    <Calendar value={selecteddeliveryDate} onChange={e => setSelecteddeliveryDate(e.value)} />
                  )}
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-start" colSpan="6">
              <div className="col-12 md:col-4">
                <div>
                  <label htmlFor="supplier" className="me-3">
                    Supplier/Manufacturer:
                  </label>
                  <InputText id="supplier" value={supplier} onChange={e => setSuppliername(e.target.value)} />
                  {supplier}
                </div>
              </div>
            </td>

            <td className="text-start" colSpan="2">
              <div className="col-12 md:col-4">
                <div>
                  <label htmlFor="Inspection" className="me-3">
                    {' '}
                    Inspection Date:
                  </label>
                  {showCalendar && (
                    <Calendar value={selectedInspectionDate} onChange={e => setSelectedInspectionDate(e.value)} />
                  )}
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td className="text-start" colSpan="6">
              <div className="col-12 md:col-4">
                <div>
                  <label htmlFor="Inspection" className="me-3">
                    Method of Inspection:
                  </label>
                  <Dropdown
                    value={selectedMethod}
                    options={method}
                    onChange={onMethodChange}
                    optionLabel="name"
                    placeholder="Method of Inspection"
                  />
                </div>
              </div>
            </td>

            <td className="text-start" colSpan="2">
              <div className="col-12 md:col-4">
                <div>
                  <label htmlFor="Inspection" className="me-3">
                    Delivery Note:
                  </label>
                  <InputText
                    id="deliverynote"
                    placeholder="delivery note"
                    value={deliverynote}
                    onChange={e => setDeliveryNote(e.target.value)}
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-start" colSpan="6">
              <div className="col-12 md:col-4">
                <div>
                  <label htmlFor="Contract" className="me-3">
                    Contract No:
                  </label>
                  <InputNumber inputId="integeronly" value={contractNo} onValueChange={e => setcontractNo(e.value)} />
                </div>
              </div>
            </td>

            <td className="" colSpan="2">
              <div className="col-12 md:col-4">
                <div>
                  <label htmlFor="username" className="me-3">
                    Invoice No:
                  </label>
                  <InputText
                    id="Invoice"
                    placeholder="Invoice no"
                    value={invoice}
                    onChange={e => invoiceNo(e.target.value)}
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-center" colSpan="4">
              <div className="col-12 md:col-4">
                <div>
                  <label htmlFor="username" className="me-3">
                    Total Inspected:
                  </label>
                  <InputNumber
                    inputId="integeronly"
                    value={totalinspected}
                    onValueChange={e => settotalinspected(e.value)}
                  />
                </div>
              </div>
            </td>
            <td className="text-center" colSpan="2">
              <div>
                <label htmlFor="username" className="me-3">
                  Total Pass:
                </label>
                <InputNumber inputId="integeronly" value={totalPass} onValueChange={e => settotalPass(e.value)} />
              </div>
            </td>
            <td className="" colSpan="2">
              <div>
                <label htmlFor="username" className="me-3">
                  Total Failuire:
                </label>
                <InputNumber inputId="integeronly" value={totalFailure} onValueChange={e => settotalFailure(e.value)} />
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
                <p>Select individual documents and Click the "Upload" button to upload the document(s) to the system</p>
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={4}>
              <h5>Umeme Requirements</h5>
            </td>
            <Hero selectedSample={selectedSample} param={paramData} />
          </tr>

          <tr>
            <td colSpan={8}>
              <div>
                <div className="card ">
                  <h6>Remarks/Comments (Indicated the Total quantities passed/Failed)</h6>
                  <Editor style={{ height: '150px' }} value={remarks} onTextChange={e => setRemarks(e.htmlValue)} />
                </div>
                {/* <div dangerouslySetInnerHTML={{__html: text1}} /> */}

                <div className="text-end m-3 ">
                  <Button
                    label="Submit"
                    className="p-button-raised p-button-text me-2"
                    style={{ background: '#b5bd36', color: '#fff' }}
                  />
                  <Button label="Cancel" className="p-button-raised p-button-danger p-button-text" />
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <label>
        {' '}
        Selected Item: <span className="text-warning">{selectedCity1 ? selectedCity1.name : 'none'}</span>
      </label>{' '}
      Switch value: <span className="text-warning"> {checked1 ? 'pass' : 'fail'}</span> Observation:
      <span className="text-warning m-2">{textValue}</span>Selected Date:{' '}
      <span className="text-warning m-2"> {selectedDate ? moment(selectedDate).fromNow() : 'No date'}</span> Delivery
      date
      <span className="text-danger m-2 ">
        {selecteddeliveryDate ? moment(selecteddeliveryDate).fromNow() : 'No date'}
      </span>
      Inspection Date
      <span className="text-success m-2 ">
        {selectedInspectionDate ? moment(selectedInspectionDate).fromNow() : 'No date'}
      </span>
      {/* <span className="text-success m-2"> {selectedDeliveryDate ? selectedDeliveryDate.toString() : 'No date'}</span> */}
      <span className="me-2 text-warning">{selectedCountry ? selectedCountry.name : 'none'}</span>
      <span className="me-2 text-success">{selectedMethod ? selectedMethod.name : 'none'}</span>
      <span className="me-2 text-warning">{selectedSample ? selectedSample.name : 'none'}</span>{' '}
      <div dangerouslySetInnerHTML={{ __html: remarks }} />
      <div className="steps-demo m-5">
        <Toast ref={toast}></Toast>

        <div>
          <Steps model={items} activeIndex={activeIndex} onSelect={e => setActiveIndex(e.index)} readOnly={true} />
        </div>
      </div>
    </>
  );
};

export default form;
