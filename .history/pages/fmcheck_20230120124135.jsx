import { Editor } from 'primereact/editor';
import React, { useState, useEffect, useRef } from 'react';

const MyComponent = () => {
  const namesAge = [
    { name: 'John', age: '25' },
    { name: 'Mary', age: '30' },
    { name: 'Mike', age: '35' },
    { name: 'Sarah', age: '40' },
    { name: 'Steve', age: '45' }
  ];

  const [content, setContent] = useState('<table></table>');

  const addRandomValues = () => {
    let tableRows = '';
    for (let i = 0; i < 5; i++) {
      let rowData = '<td>' + namesAge[i].name + '</td><td>' + namesAge[i].age + '</td>';
      tableRows += '<tr>' + rowData + '</tr>';
    }
    setContent('<table>' + tableRows + '</table>');
  };
  useEffect(() => {
    addRandomValues();
  }, []);

  return <Editor value={content} onTextChange={e => setContent(e.htmlValue)} />;
};
export default MyComponent;
