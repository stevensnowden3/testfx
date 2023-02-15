import React from 'react';
import { Toast } from 'primereact/toast';

const ToastMessage = ({ showSuccess, showError }) => {
  const toast = useRef(null);
  return (
    <>
      <Toast ref={toast} />
      {showSuccess &&
        toast.current.show({
          severity: 'success',
          summary: 'Data Saved',
          detail: 'Checklist Saved Successfully',
          life: 3000
        })}
      {showError &&
        toast.current.show({
          severity: 'error',
          summary: 'Empty field',
          detail: 'All Field Must be filled!',
          life: 3000
        })}
    </>
  );
};

export default ToastMessage;
