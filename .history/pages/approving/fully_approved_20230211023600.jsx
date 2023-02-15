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

import { ConfirmPopup } from 'primereact/confirmpopup'; // To use <ConfirmPopup> tag
import { confirmPopup } from 'primereact/confirmpopup'; // To use confirmPopup method
import { ConfirmDialog, confirmDialog } from 'primereact/confirmdialog';
import { Toast } from 'primereact/toast';

import { ROLES } from '../components/dataitems';
import { Message } from 'primereact/message';

const View = () => {
  const toast = useRef(null);

  const approveButtonRef = useRef();
  const rejectButtonRef = useRef();

  const confirmPopupRef = useRef();

  const accept = () => {
    toast.current.show({ severity: 'success', summary: 'Confirmed', detail: 'Approval Confirmed!', life: 3000 });
  };

  const reject = () => {
    toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'Checklist Rejected!', life: 3000 });
  };
  const no_comment = () => {
    toast.current.show({
      severity: 'error',
      summary: 'Cannot Proceed!',
      detail: 'Please provide comment!',
      life: 3000
    });
  };

  const { user, isLoading } = useUser();
  const [comment, setComment] = useState('');

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
    if (comment != '') {
      let result;

      await new Promise(resolve => {
        confirmPopup({
          // target: event.currentTarget,
          target: approveButtonRef.current,
          message: 'Do you want to Approve this record?',
          icon: 'pi pi-info-circle',
          acceptClassName: 'p-button-success',
          accept: () => {
            result = true;
            resolve();
          },
          reject: () => {
            result = false;
            resolve();
          }
        });
      });

      if (result) {
        const approved_by = user.name;
        const role = user['https://netlify-integration.com/roles'].includes('TCO')
          ? 'TCO'
          : user['https://netlify-integration.com/roles'].includes('QAM')
          ? 'QAM'
          : user['https://netlify-integration.com/roles'].includes('LWM')
          ? 'LWM'
          : 'MIT';

        if (role) {
          try {
            await axios.patch(`/api/checklist/${router.query.id}`, {
              status: role,
              approved_by: approved_by,
              comment: comment
            });
            setStatus(role);
            accept();
            setTimeout(() => {
              router.push({
                pathname: '/viewEditDeleteTable'
              });
            }, 3000);
          } catch (error) {
            console.log(error);
          }
        }
      }
    } else {
      no_comment();
    }
  };

  // handleReject
  const handleReject = async () => {
    if (comment != '') {
      let result;
      await new Promise(resolve => {
        confirmPopup({
          // target: event.currentTarget,
          target: rejectButtonRef.current,
          message: 'Comfirm Checklist Rejection?',
          icon: 'pi pi-info-circle',
          acceptClassName: 'p-button-success',
          accept: () => {
            result = true;
            resolve();
          },
          reject: () => {
            result = false;
            resolve();
          }
        });
      });

      if (result) {
        const approved_by = user.name;
        try {
          await axios.patch(`/api/checklist/${router.query.id}`, {
            status: 'REJECTED',
            comment: comment,
            approved_by: approved_by
          });
          setStatus(-1);
          reject();
          setTimeout(() => {
            router.push({
              pathname: '/pending/pending_tco'
            });
          }, 3000);
        } catch (error) {
          console.log(error);
        }
      }
    } else {
      no_comment();
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
      {(user && user[ROLES].includes('TCO')) ||
      user[ROLES].includes('QAM') ||
      user[ROLES].includes('LWM') ||
      user[ROLES].includes('LWM') ? (
        <>
          <h2 className="text-center mb-2" style={{ color: '#04392a' }}>
            INDIVIDUAL MATERIAL DETAILS
          </h2>
          {item ? (
            <div className=" container m-5">
              <p>Material Name: {item.material_name}</p>
              <p>Supplier Name: {item.supplier_name}</p>
              <p>Method of Inspection: {item.method_of_inspection}</p>
              <p>sample_selection: {item.sample_selection}</p>
              <p>Location: {item.location}</p>
              <p>Contact Number: {item.material_received}</p>
              <p>Total Failure: {item.total_failure}</p>
              <p className="text-primary">STATUS: {item.status}</p>
              <p>Delivery Note: {item.delivery_note}</p>
              <p>Sample Inspected: {item.sample_inspected}</p>
              <p>Inspection Date: {moment(item.inspection_date).format('MMMM, Do hA')} </p>
              <p>Delivery Date: {moment(item.inspection_date).format('MMMM, Do hA')}</p>
              <div className="bg-light ">
                <div className="mx-5" dangerouslySetInnerHTML={{ __html: item.remark }} />
              </div>
              <div>{item.comments}</div>
              <div className="m-2 " style={{ width: '50%' }}>
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
              <div>
                <Toast ref={toast} />
                <ConfirmPopup ref={confirmPopupRef} />
              </div>
              <div className="text-center mt-5 ">
                {item.status === 3 && (
                  <Button
                    className="p-button-raised  p-button-text me-2 "
                    onClick={handleApprove}
                    ref={approveButtonRef}
                    style={{ background: '#b5bd36', color: '#fff' }}
                    aria-label="download pdf">
                    <i className="pi pi-check-circle "></i>
                    <span className="px-3" disabled>
                      Approve
                    </span>
                  </Button>
                )}
                {item.status !== -1 && (
                  <Button
                    className="p-button-raised p-button-danger p-button-text "
                    // onClick={handleReject}
                    onClick={handleReject}
                    ref={rejectButtonRef}
                    aria-label="download pdf">
                    <i className="pi pi-times-circle "></i>
                    <span className="px-3" disabled>
                      Reject
                    </span>
                  </Button>
                )}
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
