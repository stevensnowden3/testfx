import React, { useState } from 'react';

export default function FileUpload({ file }) {
  const uploadToServer = async () => {
    const body = new FormData();
    body.append('file', file);
    const response = await fetch('/api/upload', {
      method: 'POST',
      body
    });
  };

  return (
    <div>
      <button className="btn" type="submit" onClick={uploadToServer}>
        Upload
      </button>
    </div>
  );
}