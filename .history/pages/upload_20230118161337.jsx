


import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import axios from 'axios';



const TestDatabaseConnection = () => {
      const handleUpload = async (event) => {
        const files = event.files;
        const formData = new FormData();
        for (let i = 0; i < files.length; i++) {
            formData.append('file', files[i]);
        }
        try {
            const response = await axios.post('http://localhost:3001/api/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };
  

  return(
   <div>

         <FileUpload name="myFile" url={`${process.env.SERVER_URL}/upload`} onUpload={handleUpload} multiple={true} />
  </div>
  );
}

export default TestDatabaseConnection;
