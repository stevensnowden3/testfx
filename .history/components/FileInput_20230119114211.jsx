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

      <input
        type="file"
        name="myImage"
        className="mb-2 btn btn-light"
        style={{ padding: '10px', cursor: 'pointer' }}
        onChange={handleChange}
      />
    </div>
  );
}
