import React, { useState } from 'react';

export default function FileChooser({ onImageChange }) {
  const uploadToClient = event => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      onImageChange(i);
    }
  };

  return (
    <div>
      <h4>Select Image</h4>
      <input type="file" name="myImage" onChange={uploadToClient} />
    </div>
  );
}
