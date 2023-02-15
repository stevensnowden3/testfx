import React, { useState, useRef } from 'react';
import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';

import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import { Dropdown } from 'primereact/dropdown';
import { InputSwitch } from 'primereact/inputswitch';
import { Steps } from 'primereact/steps';
import { Toast } from 'primereact/toast';
import { Calendar } from 'primereact/calendar';
import moment from 'moment';

const form = () => {
  const { user, isLoading } = useUser();

  const [selectedCity1, setSelectedCity1] = useState(null);
  const [checked1, setChecked1] = useState(false);
  const [textValue, setTextValue] = useState('');
  const [selectedDate, setSelectedDate] = useState(null);
  const [showCalendar, setShowCalendar] = useState(true);
  const [text1, setText1] = useState('<div></div>');

  const cities = [
    { name: 'Poles', code: 'pol' },
    { name: 'Safe', code: 'sf' }
  ];

  const onCityChange = e => {
    setSelectedCity1(e.value);
  };

  const [activeIndex, setActiveIndex] = useState(1);
  const toast = useRef(null);
  const items = [
    {
      label: 'Inspection of Raw Materials',
      command: event => {
        toast.current.show({ severity: 'info', summary: 'First Step', detail: event.item.label });
      }
    },
    {
      label: 'Waiting for Aprroval',
      command: event => {
        toast.current.show({ severity: 'info', summary: 'Second Step', detail: event.item.label });
      }
    },
    {
      label: 'Approved by QA',
      command: event => {
        toast.current.show({ severity: 'info', summary: 'Third Step', detail: event.item.label });
      }
    }
  ];

  const onDateSelect = e => {
    setSelectedDate(e.value);
    setShowCalendar(false);
    setShowCalendar(true);
  };

  return (
    <>
      {isLoading && <Loading />}

      {user && user['https://netlify-integration.com/roles'].includes('editor') && (
        <>
          <table className="table table-bordered">
            <thead className="">
              <tr>
                <th className="text-center" colSpan="8">
                  <h3> Material Quality Inspectors </h3>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th colSpan={2}>Inspected by:</th>
                <th colSpan={2}>Designation</th>
                <th colSpan={2}>Signature</th>
                <th colSpan={2}>Date</th>
              </tr>

              <tr>
                <td colSpan="2">
                  <h6>Surface Finish of Pole Cap</h6>
                </td>
                <td colSpan={2} className="text-center">
                  <label>Select an option:</label>
                  <Dropdown
                    value={selectedCity1}
                    options={cities}
                    onChange={onCityChange}
                    optionLabel="name"
                    placeholder="Select an Item"
                  />
                </td>
                <td colSpan={2} className="text-center">
                  <InputText value={textValue} onChange={e => setTextValue(e.target.value)} placeholder="observation" />
                </td>
                <td colSpan={2} className="text-center">
                  {' '}
                  <InputSwitch checked={checked1} onChange={e => setChecked1(e.value)} />
                </td>
              </tr>
              <tr>
                <td colSpan="2">
                  <h6>FirstName LastName</h6>
                </td>
                <td colSpan={2} className="text-center">
                  <label>Select an option:</label>
                  <Dropdown
                    value={selectedCity1}
                    options={cities}
                    onChange={onCityChange}
                    optionLabel="name"
                    placeholder="Select an Item"
                  />
                </td>
                <td colSpan={2} className="text-center">
                  <InputText value={textValue} onChange={e => setTextValue(e.target.value)} placeholder="observation" />
                </td>
                <td colSpan={2} className="text-center">
                  {' '}
                  {showCalendar && (
                    <Calendar
                      value={selectedDate}
                      onChange={onDateSelect}
                      showButtonBar={true}
                      showTime={false}
                      dateFormat="yy-mm-dd"
                    />
                  )}
                </td>
              </tr>
            </tbody>
          </table>
          <label>
            {' '}
            Selected Item: <span className="text-warning">{selectedCity1 ? selectedCity1.name : 'none'}</span>
          </label>{' '}
          Switch value: <span className="text-warning"> {checked1 ? 'pass' : 'fail'}</span> Observation:
          <span className="text-warning">{textValue}</span>Selected Date:{' '}
          <span className="text-warning"> {selectedDate ? moment(selectedDate).fromNow() : 'No date'}</span>
          <div>
            <div className="card ">
              <h6>Remarks/Comments (From Inspectors)</h6>
              <Editor style={{ height: '150px' }} value={text1} onTextChange={e => setText1(e.htmlValue)} />
            </div>
            {/* <div dangerouslySetInnerHTML={{__html: text1}} /> */}

            <div className="text-end m-3 ">
              <Button label="Approve" className="p-button-raised p-button-text" />
              <Button label="Reject" className="p-button-raised p-button-danger p-button-text" />
            </div>
          </div>
          <div className="steps-demo m-5">
            <Toast ref={toast}></Toast>

            <div>
              <Steps model={items} activeIndex={activeIndex} onSelect={e => setActiveIndex(e.index)} readOnly={true} />
            </div>
            {user['https://netlify-integration.com/roles'].includes('editor') && <p className="m-2"> Inspector</p>}
            {user['https://netlify-integration.com/roles'].includes('admin') && <h5>You are Admin</h5>}
          </div>
        </>
      )}
      {user['https://netlify-integration.com/roles'].includes('user') && (
        <p className="text-center text-warning m-5">You dont have permissions to access this route</p>
      )}
    </>
  );
};

export default withPageAuthRequired(form, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
