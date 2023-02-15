import React, { useState } from 'react';
import { RichTextEditorComponent } from 'primereact/richtexteditor';
import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

const MyComponent = () => {
  const [content, setContent] = useState('');
  const toolbar = [
    {
      name: 'table',
      items: ['add', 'delete', 'update', 'properties']
    }
  ];

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
      <RichTextEditorComponent value={content} onValueChange={setContent} toolbar={toolbar} />
    </div>
  );
};

export default MyComponent;
