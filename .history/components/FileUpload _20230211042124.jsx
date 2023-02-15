import React, { useState } from 'react';
import axios from 'axios';

const FileUpload = ({ file }) => {
  const [response, setResponse] = useState();

  const uploadToServer = async () => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const res = await axios.post('/api/upload', formData);
      setResponse(res.data);
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
};

export default FileUpload;
