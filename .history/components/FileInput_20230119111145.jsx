import React, { useState } from 'react';

export default function FileInput({ onChange }) {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const handleChange = event => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      setCreateObjectURL(URL.createObjectURL(i));
      onChange(i);
    }
  };

  return (
    <div>
      <img src={createObjectURL} />
      <h4>Select Image</h4>
      <input type="file" name="myImage" onChange={handleChange} />
    </div>
  );
}
