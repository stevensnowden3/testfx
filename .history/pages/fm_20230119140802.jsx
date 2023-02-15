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
  const [username, setUsername] = useState('');
  const [supplier, setSuppliername] = useState('');

  const [text1, setText1] = useState('<div></div>');
  const [value2, setValue2] = useState();
  const [value, setValue] = useState('');

  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(true);
  const onDateSelect = e => {
    setSelectedDate(e.value);
    setShowCalendar(false);
    setShowCalendar(true);
  };

  const handleChange = event => {
    const inputValue = event.target.value;
    if (!isNaN(inputValue) && inputValue !== '') {
      setValue(inputValue);
    }
  };
  // app Data
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
                  <label htmlFor="username" className="me-3">
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
                  <label htmlFor="username" className="me-3">
                    Delivery Date:
                  </label>
                  {showCalendar && (
                    <Calendar
                      value={selectedDate}
                      onChange={onDateSelect}
                      showButtonBar={true}
                      showTime={false}
                      dateFormat="yy-mm-dd"
                    />
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
                  <label htmlFor="username" className="me-3">
                    {' '}
                    Inspection Date:
                  </label>
                  {showCalendar && (
                    <Calendar
                      value={selectedDate}
                      onChange={onDateSelect}
                      showButtonBar={true}
                      showTime={false}
                      dateFormat="yy-mm-dd"
                    />
                  )}
                </div>
              </div>
            </td>
          </tr>

          <tr>
            <td className="text-start" colSpan="6">
              <div className="col-12 md:col-4">
                <div>
                  <label htmlFor="username" className="me-3">
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
                  <label htmlFor="username" className="me-3">
                    Delivery Note:
                  </label>
                  <InputText
                    id="username"
                    placeholder="delivery note"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                  />
                </div>
              </div>
            </td>
          </tr>
          <tr>
            <td className="text-start" colSpan="6">
              <div className="col-12 md:col-4">
                <div>
                  <label htmlFor="username" className="me-3">
                    Contract No:
                  </label>
                  <InputNumber inputId="integeronly" value={value2} onValueChange={e => setValue2(e.value)} />
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
                    id="username"
                    placeholder="Invoice no"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
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
                  <InputNumber inputId="integeronly" value={value2} onValueChange={e => setValue2(e.value)} />
                </div>
              </div>
            </td>
            <td className="text-center" colSpan="2">
              <div>
                <label htmlFor="username" className="me-3">
                  Total Pass:
                </label>
                <InputNumber inputId="integeronly" value={value2} onValueChange={e => setValue2(e.value)} />
              </div>
            </td>
            <td className="" colSpan="2">
              <div>
                <label htmlFor="username" className="me-3">
                  Total Failuire:
                </label>
                <InputNumber inputId="integeronly" value={value2} onValueChange={e => setValue2(e.value)} />
              </div>
            </td>
          </tr>
          <tr>
            <td colSpan={8}>
              <Divider align="center">
                <span style={{ background: '#b5bd36', color: '#fff', borderRadius: '5px' }}>Inspection comment</span>
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
                  <Editor style={{ height: '150px' }} value={text1} onTextChange={e => setText1(e.htmlValue)} />
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
      <p>
        Field: {username} <span>{}</span>
      </p>
      <label>
        {' '}
        Selected Item: <span className="text-warning">{selectedCity1 ? selectedCity1.name : 'none'}</span>
      </label>{' '}
      Switch value: <span className="text-warning"> {checked1 ? 'pass' : 'fail'}</span> Observation:
      <span className="text-warning m-2">{textValue}</span>Selected Date:{' '}
      <span className="text-warning m-2"> {selectedDate ? moment(selectedDate).fromNow() : 'No date'}</span>
      <span className="me-2 text-warning">{selectedCountry ? selectedCountry.name : 'none'}</span>
      <span className="me-2 text-warning">{selectedSample ? selectedSample.name : 'none'}</span>{' '}
      <span className="text-warning">{value2 ? value2 : 'none'}</span>
      <div dangerouslySetInnerHTML={{ __html: text1 }} />
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
