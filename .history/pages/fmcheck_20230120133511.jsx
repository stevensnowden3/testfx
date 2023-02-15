import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const MyComponent = () => {
  const [content, setContent] = useState('');

  const modules = {
    toolbar: [[{ table: [] }]]
  };

  const dummyData = [
    ['Name', 'Age'],
    ['John', 25],
    ['Mary', 30],
    ['Mike', 35],
    ['Sarah', 40],
    ['Steve', 45]
  ];

  const insertTable = () => {
    let tableHtml = '<table>';
    for (let i = 0; i < dummyData.length; i++) {
      tableHtml += '<tr>';
      for (let j = 0; j < dummyData[i].length; j++) {
        tableHtml += `<td>${dummyData[i][j]}</td>`;
      }
      tableHtml += '</tr>';
    }
    tableHtml += '</table>';
    setContent(tableHtml);
  };

  return (
    <div>
      <button onClick={insertTable}>Insert Table</button>
      <ReactQuill value={content} onChange={setContent} modules={modules} />
    </div>
  );
};

export default MyComponent;
