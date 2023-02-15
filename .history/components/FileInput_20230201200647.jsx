import React, { useState } from 'react';

export default function FileInput({ onChange, createObjectURL }) {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const handleChange = event => {
    if (event.target.files && event.target.files[0]) {
      const file = event.target.files[0];
      const fileExtension = file.name.split('.').pop();
      const newFileName = `${file.name.substr(0, file.name.lastIndexOf('.'))}_${Date.now()}.${fileExtension}`;
      const renamedFile = new File([file], newFileName, { type: file.type });

      setImage(renamedFile);
      setCreateObjectURL(URL.createObjectURL(renamedFile));
      onChange(renamedFile);
    }
  };

  return (
    <div>
      <img src={createObjectURL} />
      <p>ulr={createObjectURL}</p>

      <input
        type="file"
        name="myImage"
        className=" btn btn-light"
        style={{ cursor: 'pointer' }}
        onChange={handleChange}
      />
    </div>
  );
}
