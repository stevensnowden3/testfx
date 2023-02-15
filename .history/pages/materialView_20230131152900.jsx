import { useUser, withPageAuthRequired } from '@auth0/nextjs-auth0/client';
import Loading from '../components/Loading';
import ErrorMessage from '../components/ErrorMessage';
import { setActiveIndex } from '../components/setIndexSteps';
import { itemsList } from '../components/dataitems';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/router';
import 'primeicons/primeicons.css';
import { Button } from 'primereact/button';
import { Steps } from 'primereact/steps';
import moment from 'moment';

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

  // Handle approve
  const [status, setStatus] = useState(0);
  const handleApprove = async () => {
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
        await axios.patch(`/api/checklist/${router.query.id}`, { status: role, approved_by: approved_by });
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
      await axios.patch(`/api/checklist/${router.query.id}`, { status: -1, approved_by: approved_by });
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
                {item.status !== 0 && (
                  <Button
                    className="p-button-raised  p-button-text me-2 "
                    onClick={handleApprove}
                    style={{ background: '#b5bd36', color: '#fff' }}
                    aria-label="download pdf">
                    <i className="pi pi-check-circle "></i>
                    <span className="px-3">Approve</span>
                  </Button>
                )}
                <Button
                  className="p-button-raised p-button-danger p-button-text "
                  onClick={handleReject}
                  aria-label="download pdf">
                  <i className="pi pi-times-circle "></i>
                  <span className="px-3">Reject</span>
                </Button>
                {status !== -1 && (
                  <div>
                    <p className="text-success mt-3">Approved on {moment(item.updatedAt).format('DD/MM/YYYY')}</p>
                    <p>By {user.name}</p>
                  </div>
                )}
                {status === -1 && (
                  <div>
                    <p className="text-danger mt-4">Rejected on {moment(item.updatedAt).format('DD/MM/YYYY')}</p>
                    <p>By {user.name}</p>
                  </div>
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
