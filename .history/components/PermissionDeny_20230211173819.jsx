import React from 'react';
import { Message } from 'primereact/message';

const PermissionDeny = () => (
  <div
    className="text-center"
    style={{
      marginTop: '100px'
    }}>
    <div>
      <Message severity="error" text="You don't have permissions to access this page" />
    </div>
    <div className="text-center">
      <Message
        style={{
          border: 'solid red',
          borderWidth: '0 0 0 6px',
          color: '#000'
        }}
        className="border-warn text-danger w-full justify-content-start mb-5"
        severity="error"
        content={'Request for permissions'}
      />
    </div>
  </div>
);

export default PermissionDeny;
