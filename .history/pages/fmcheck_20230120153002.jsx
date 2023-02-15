import React, { useState } from 'react';
import { RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';
import '@syncfusion/ej2-base/styles/material.css';
import '@syncfusion/ej2-buttons/styles/material.css';
import '@syncfusion/ej2-react-richtexteditor/styles/material.css';

const MyComponent = () => {
  const [content, setContent] = useState('');
  const toolbar = ['Table'];

  const dummyData = [
    ['Name', 'Age'],
    ['John', 25],
    ['Mary', 30],
    ['Mike', 35],
    ['Sarah', 40],
    ['Steve', 45]
  ];

  const insertTable = () => {
    let tableHtml = '<table className="my-table">';
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
      {/* <RichTextEditorComponent value={content} onValueChange={setContent} toolbar={toolbar} /> */}
      <RichTextEditorComponent value={content} onChange={setContent} toolbarSettings={{ items: toolbar }} />
    </div>
  );
};

export default MyComponent;
