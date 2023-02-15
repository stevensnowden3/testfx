import React, { useState } from 'react';

export default function FileUploader({ file }) {
  const [createObjectURL, setCreateObjectURL] = useState(null);
  const uploadToServer = async event => {
    const body = new FormData();
    body.append('file', file);
    const response = await fetch('/api/upload', {
      method: 'POST',
      body
    });
  };

  return (
    <div>
      <img src={createObjectURL} />
      <button className="btn btn-primary" type="submit" onClick={uploadToServer}>
        Send to server
      </button>
    </div>
  );
}
