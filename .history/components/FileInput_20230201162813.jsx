import React, { useState } from 'react';

export default function FileInput({ onChange }) {
  const [image, setImage] = useState(null);
  const [createObjectURL, setCreateObjectURL] = useState(null);

  const handleChange = event => {
    if (event.target.files && event.target.files[0]) {
      const i = event.target.files[0];

      setImage(i);
      const uniqueName = i.name + '_' + Date.now();
      const renamedFile = new File([i], uniqueName, { type: i.type });
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
