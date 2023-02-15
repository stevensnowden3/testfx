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
import { InputTextarea } from 'primereact/inputtextarea';

import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { confirmPopup } from 'primereact/confirmpopup';
import { ConfirmPopup } from 'primereact/confirmpopup';
import { Toast } from 'primereact/toast';

import { ROLES } from '../components/dataitems';

const View = () => {
  const { user, isLoading } = useUser();
  const [comment, setComment] = useState('');

  const toast = useRef(null);

  const accept = () => {
    toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted', life: 3000 });
  };

  const reject = () => {
    toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected', life: 3000 });
  };
  const confirm1 = event => {
    if (event.hasOwnProperty('currentTarget')) {
      confirmPopup({
        target: event.currentTarget,
        message: 'Are you sure you want to proceed?',
        icon: 'pi pi-exclamation-triangle',
        accept
      });
    }
  };

  const confirm2 = event => {
    confirmPopup({
      target: event.currentTarget,
      message: 'Do you want to delete this record?',
      icon: 'pi pi-info-circle',
      acceptClassName: 'p-button-danger',
      accept,
      reject
    });
  };

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

  // Handle approve
  const [status, setStatus] = useState(0);
  const handleApprove = async () => {
    confirm1();
    const approved_by = user.name;
    const role = user['https://netlify-integration.com/roles'].includes('TCO')
      ? 1
      : user['https://netlify-integration.com/roles'].includes('QAM')
      ? 2
      : user['https://netlify-integration.com/roles'].includes('LWM')
      ? 3
      : 0;

    if (role) {
      try {
        await axios.patch(`/api/checklist/${router.query.id}`, {
          status: role,
          approved_by: approved_by,
          comment: comment
        });
        setStatus(role);
      } catch (error) {
        console.log(error);
      }
    }
  };

  // handleReject
  const handleReject = async () => {
    const approved_by = user.name;
    try {
      await axios.patch(`/api/checklist/${router.query.id}`, {
        status: -1,
        comment: comment,
        approved_by: approved_by
      });
      setStatus(-1);
    } catch (error) {
      console.log(error);
    }
  };

  // insert steps
  const [activeIndex, setActiveStep] = useState(1);
  useEffect(() => {
    setActiveIndex(user, setActiveStep);
  }, [user]);
  const items = itemsList.map(item => item);

  return (
    <div>
      {isLoading && <Loading />}
      {(user && user[ROLES].includes('TCO')) || user[ROLES].includes('QAM') || user[ROLES].includes('LWM') ? (
        <>
          <h2 className="text-center mb-2" style={{ color: '#04392a' }}>
            INDIVIDUAL MATERIAL DETAILS
          </h2>
          {item ? (
            <div className=" container m-5">
              <p>Material Name: {item.material_name}</p>
              <p>Supplier Name: {item.supplier_name}</p>
              <p>Method of Inspection: {item.method_of_inspection}</p>
              <p>inspection_technique: {item.inspection_technique}</p>
              <p>Location: {item.location}</p>
              <p>Contact Number: {item.material_received}</p>
              <p>Total Failure: {item.total_failure}</p>
              <p>Delivery Note: {item.delivery_note}</p>
              <p>Sample Inspected: {item.sample_inspected}</p>
              <p>Inspection Date: {moment(item.inspection_date).format('MMMM, Do hA')} </p>
              <p>Delivery Date: {moment(item.inspection_date).format('MMMM, Do hA')}</p>
              <div className="bg-light ">
                <div className="mx-5" dangerouslySetInnerHTML={{ __html: item.remark }} />
              </div>
              <div className="m-5 " style={{ width: '50%' }}>
                <h5>
                  Comment:
                  <span className="text-danger">*</span>
                </h5>
                <div className="card flex justify-content-center">
                  <InputTextarea
                    value={comment}
                    onChange={e => setComment(e.target.value)}
                    rows={3}
                    cols={10}
                    placeholder="@ Reason for approval or rejection"
                  />
                </div>
              </div>
              <Toast ref={toast} />
              <ConfirmPopup />
              <div className="text-center mt-5 ">
                {!user[ROLES].includes('HNAD') && item.status === 0 && (
                  <Button
                    className="p-button-raised  p-button-text me-2 "
                    onClick={handleApprove}
                    style={{ background: '#b5bd36', color: '#fff' }}
                    aria-label="download pdf">
                    <i className="pi pi-check-circle "></i>
                    <span className="px-3">Approve</span>
                  </Button>
                )}
                {item.status !== -1 && (
                  <Button
                    className="p-button-raised p-button-danger p-button-text "
                    onClick={handleReject}
                    aria-label="download pdf">
                    <i className="pi pi-times-circle "></i>
                    <span className="px-3">Reject</span>
                  </Button>
                )}
                {/* <p> {item.status}</p> */}
                {item.status === 12 && (
                  <div>
                    <p className="text-success mt-3">Approved on {moment(item.updatedAt).format('DD/MM/YYYY')}</p>
                    <p>By {user.name}</p>
                  </div>
                )}

                {item.status === 1 ||
                item.status === 2 ||
                item.status === 3 ||
                status === 1 ||
                status === 2 ||
                status === 3 ? (
                  <div>
                    <p className="text-success mt-3">Approved on {moment(item.updatedAt).format('DD/MM/YYYY')}</p>
                    <p>By {user.name}</p>
                  </div>
                ) : null}
                {item.status === -1 || status === -1 ? (
                  <div>
                    <p className="text-danger mt-4">Rejected on {moment(item.updatedAt).format('DD/MM/YYYY')}</p>
                    <p>By {user.name}</p>
                  </div>
                ) : null}
              </div>

              <div className="mt-5">
                <Steps
                  model={items}
                  activeIndex={activeIndex}
                  onSelect={e => setActiveIndex(e.index)}
                  readOnly={true}
                />
              </div>
            </div>
          ) : (
            <p>Loading...</p>
          )}
        </>
      ) : (
        <>
          <h5 className="text-center text-warning m-5">You dont have permissions to access this page</h5>
          <p className="text-center text-danger m-5">Request for permissions</p>
        </>
      )}
    </div>
  );
};

export default withPageAuthRequired(View, {
  onRedirecting: () => <Loading />,
  onError: error => <ErrorMessage>{error.message}</ErrorMessage>
});
