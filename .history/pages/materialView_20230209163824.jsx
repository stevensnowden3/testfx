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
import { InputTextarea } from 'primereact/inputtextarea';
import { Dialog, ConfirmDialog } from 'primereact/dialog';

import { ROLES } from '../components/dataitems';

const View = () => {
  const { user, isLoading } = useUser();
  const [comment, setComment] = useState('');

  const [item, setItem] = useState({});
  const router = useRouter();
  const [showConfirm, setShowConfirm] = useState(false);
  const [approveType, setApproveType] = useState('');

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
      setApproveType('Approve');
      setShowConfirm(true);
    }
  };

  const handleApproveConfirm = async () => {
    try {
      await axios.patch(`/api/checklist/${router.query.id}`, {
        status: approveType === 'Approve' ? role : -1,
        approved_by: approved_by,
        comment: comment
      });
      setStatus(approveType === 'Approve' ? role : -1);
    } catch (error) {
      console.log(error);
    }
    setShowConfirm(false);
  };

  // handleReject
  const handleReject = async () => {
    setApproveType('Reject');
    setShowConfirm(true);
  };

  // insert steps
  const [steps, setSteps] = useState([]);
  useEffect(() => {
    setSteps(setActiveIndex(item.steps, status));
  }, [item, status]);

  // handle close of dialog
  const handleClose = () => {
    setComment('');
    setShowConfirm(false);
  };

  if (isLoading) {
    return <Loading />;
  }

  if (!user) {
    return <ErrorMessage />;
  }

  return (
    <div className="p-grid">
      <div className="p-col-12">
        <h1>View Checklist Item</h1>
        <div className="card">
          <h2>{item.name}</h2>
          <p>{item.description}</p>
          <Steps model={steps} />
          {status === 3 ? (
            <>
              <h3>Approved By: {item.approved_by}</h3>
              <p>Approved On: {moment(item.approved_at).format('MM/DD/YYYY')}</p>
            </>
          ) : (
            ''
          )}
          {ROLES[status] && (
            <p className="status">
              Status: {ROLES[status].label}
              {ROLES[status].approve && <Button label="Approve" onClick={handleApprove} />}
              {ROLES[status].reject && <Button label="Reject" onClick={handleReject} />}
            </p>
          )}
          <Dialog
            header="Confirm Approve/Reject"
            visible={showConfirm}
            onHide={handleClose}
            footer={
              <div>
                <Button label="Cancel" icon="pi pi-times" onClick={handleClose} />
                <Button label="OK" icon="pi pi-check" onClick={handleApproveConfirm} />
              </div>
            }>
            <p>Are you sure you want to {approveType.toLowerCase()} this item?</p>
            {approveType === 'Reject' && (
              <InputTextarea
                rows={5}
                cols={30}
                placeholder="Enter Reason for Rejection"
                value={comment}
                onChange={e => setComment(e.target.value)}
              />
            )}
          </Dialog>
        </div>
      </div>
    </div>
  );
};
export default withPageAuthRequired(View);
