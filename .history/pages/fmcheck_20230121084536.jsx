import tinymce from 'tinymce/tinymce';
import 'tinymce/plugins/table';
import React, { useEffect } from 'react';

const MyComponent = () => {
  const dummyArray = [
    { name: 'John', age: '25' },
    { name: 'Mary', age: '30' },
    { name: 'Mike', age: '35' },
    { name: 'Sarah', age: '40' },
    { name: 'Steve', age: '45' }
  ];

  useEffect(() => {
    tinymce.init({
      selector: '#editor',
      plugins: 'table',
      toolbar: 'table',
      setup: editor => {
        editor.on('init', () => {
          let tableHtml = '<table><tbody>';
          dummyArray.forEach(item => {
            tableHtml += `<tr><td>${item.name}</td><td>${item.age}</td></tr>`;
          });
          tableHtml += '</tbody></table>';
          editor.setContent(tableHtml);
        });
      }
    });
  }, []);

  return (
    <div>
      <textarea id="editor"></textarea>
    </div>
  );
};

export default MyComponent;
