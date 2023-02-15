import React, { useState, useEffect } from 'react';
import axios from 'axios';

const FileInput = ({ onChange }) => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  useEffect(() => {
    if (!image) return;

    const objectURL = URL.createObjectURL(image);
    setCreateObjectURL(objectURL);
    onChange(objectURL);

    return () => URL.revokeObjectURL(objectURL);
  }, [image, onChange]);

  const handleChange = event => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileExtension = file.name.split('.').pop();
      const newFileName = `${file.name.substr(0, file.name.lastIndexOf('.'))}_${Date.now()}.${fileExtension}`;
      const renamedFile = new File([file], newFileName, { type: file.type });

      setImage(renamedFile);
    }
  };

  return (
    <div>
      <img src={createObjectURL} />

      <input
        type="file"
        name="myImage"
        className=" btn btn-light"
        style={{ cursor: 'pointer' }}
        onChange={handleChange}
      />
    </div>
  );
};

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

const Home = () => {
  const [file, setFile] = useState(null);

  return (
    <div>
      <FileInput onChange={setFile} />
      {file && <FileUpload file={file} />}
    </div>
  );
};

export default Home;
