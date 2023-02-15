import React, { useState, useEffect } from 'react';
import ReactQuillStatic from 'react-quill-static';
import 'react-quill/dist/quill.snow.css'; // import the styles

const MyComponent = () => {
  const namesAge = [
    { name: 'John', age: '25' },
    { name: 'Mary', age: '30' },
    { name: 'Mike', age: '35' },
    { name: 'Sarah', age: '40' },
    { name: 'Steve', age: '45' }
  ];

  const [content, setContent] = useState('');
  const modules = {
    toolbar: [[{ table: [] }]]
  };
  useEffect(() => {
    let tableRows = '';
    for (let i = 0; i < 5; i++) {
      let rowData = '<td>' + namesAge[i].name + '</td><td>' + namesAge[i].age + '</td>';
      tableRows += '<tr>' + rowData + '</tr>';
    }
    setContent('<table>' + tableRows + '</table>');
  }, []);

  return;
  <>
    <ReactQuillStatic value={content} onChange={setContent} />
    <ReactQuill value={content} onChange={setContent} modules={modules} />;
  </>;
};
export default MyComponent;
