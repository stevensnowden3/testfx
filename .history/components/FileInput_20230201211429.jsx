import React, { useState, useEffect } from 'react';

const FileInput = ({ onChange }, { createObjectURL }) => {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  useEffect(() => {
    if (!image) return;

    const objectURL = URL.createObjectURL(image);
    setCreateObjectURL(objectURL);
    onChange(image);

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
      <p>url={createObjectURL}</p>
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

export default FileInput;
