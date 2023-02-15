


import React, { useState } from 'react';
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import axios from 'axios';



const TestDatabaseConnection = () => {
    //   const handleUpload = async (event) => {
    //     const files = event.files;
    //     const formData = new FormData();
    //     for (let i = 0; i < files.length; i++) {
    //         formData.append('file', files[i]);
    //     }
    //     try {
    //         const response = await axios.post('http://localhost:3001/api/upload', formData, {
    //             headers: {
    //                 'Content-Type': 'multipart/form-data'
    //             }
    //         });
    //         console.log(response);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };
    const handleUpload = (event) => {
  const file = event.target.files[0];

  const formData = new FormData();
  formData.append('file', file);

  // Send the file to the server
  fetch('', {
    method: 'POST',
    body: formData
  })
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error(error);
    });
}
  

  return(
   <div>

         <FileUpload name="myFile" url={''} onUpload={handleUpload} multiple={true} />
  </div>
  );
}

export default TestDatabaseConnection;
