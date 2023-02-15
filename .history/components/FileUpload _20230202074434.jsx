import React, { useState } from 'react';

export default function FileUpload({ file }) {
  const [uploadStatus, setUploadStatus] = useState(null);

  const uploadToServer = async () => {
    const body = new FormData();
    body.append('file', file);
    const response = await fetch('/api/upload', {
      method: 'POST',
      body
    });
    if (response.ok) {
      setUploadStatus('Upload successful!');
      console.log(uploadStatus);
      alert(uploadStatus);
    } else {
      setUploadStatus('Upload failed');
      console.log(uploadStatus);
      alert(uploadStatus);
    }
  };

  return (
    <div>
      <button className="btn" style={{ background: '#04392a', color: '#fff' }} type="submit" onClick={uploadToServer}>
        Upload
      </button>
    </div>
  );
}
