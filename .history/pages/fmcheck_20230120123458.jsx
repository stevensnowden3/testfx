import { Editor } from 'primereact/editor';
import React, { useState, useRef } from 'react';

const MyComponent = () => {
  const [content, setContent] = useState('<div><p>Hello world</p><table></table></div>');
  const namesAge = [
    { name: 'John', age: '25' },
    { name: 'Mary', age: '30' },
    { name: 'Mike', age: '35' },
    { name: 'Sarah', age: '40' },
    { name: 'Steve', age: '45' }
  ];

  const addRandomValues = () => {
    let tableRows = '';
    for (let i = 0; i < 5; i++) {
      let rowData = '<td>' + namesAge[i].name + '</td><td>' + namesAge[i].age + '</td>';
      tableRows += '<tr>' + rowData + '</tr>';
    }
    setContent('<table>' + tableRows + '</table>');
  };
  return (
    <>
      <Editor value={content} onTextChange={e => setContent(e.htmlValue)} />
      <button onClick={addRandomValues}>Add Random Values</button>
    </>
  );
};
export default MyComponent;
