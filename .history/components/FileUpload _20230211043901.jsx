import React, { useState } from 'react';

const FileUpload = ({ file }) => {
  const [response, setResponse] = useState();

  const uploadToServer = async event => {
    const body = new FormData();
    body.append('file', file);
    // console.log("file", image)
    body.append('file', image);
    const response = await fetch('/api/upload', {
      method: 'POST',
      body
    });
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
};

export default FileUpload;
