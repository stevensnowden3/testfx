import React, { useState } from 'react';

export default function FileUpload({ file }) {
  const [response, setResponse] = useState();

  const uploadToServer = async () => {
    const body = new FormData();
    body.append('file', file);

    try {
      console.log('Upload successful' + file);
      const response = await fetch('/api/upload', {
        method: 'POST',
        body
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Response: ', data);
        setResponse(data);
      } else {
        console.error('Upload failed, status: ', response.status);
      }
      const data = await response.json();
      console.log('Response: ', data);
      setResponse(data);
    } catch (error) {
      console.error('Upload failed', error);
    }
  };

  return (
    <div>
      <button className="btn" style={{ background: '#04392a', color: '#fff' }} type="submit" onClick={uploadToServer}>
        Upload
      </button>

      {response && (
        <div>
          Response:
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
}
