import React, { useState } from 'react';

export default function FileUpload({ file }) {
  const uploadToServer = async () => {
    console.log('Upload successful' + file);
    const body = new FormData();
    body.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body
      });
      console.log('Upload successful');
    } catch (error) {
      console.error('Upload failed', error);
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
