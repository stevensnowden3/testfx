import { useState } from 'react';
import axios from 'axios';

const upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = event => {
    setSelectedFile(event.target.files[0]);
  };

  const handleFileUpload = async () => {
    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post('/api/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form>
      <input type="file" onChange={handleFileChange} />

      <button type="button" onClick={handleFileUpload}>
        Upload
      </button>
    </form>
  );
};

export default upload;
