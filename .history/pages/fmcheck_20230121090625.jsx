import React, { useRef } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const MyComponent = () => {
  const dummyArray = [
    { name: 'John', age: '25' },
    { name: 'Mary', age: '30' },
    { name: 'Mike', age: '35' },
    { name: 'Sarah aine emana', age: '40' },
    { name: 'Steve', age: '45' }
  ];

  let tableHtml = '<table class="table table-bordered border-primary">';
  tableHtml += '<thead><tr><th>Name</th><th>Age</th></tr></thead>';
  tableHtml += '<tbody>';
  dummyArray.forEach(item => {
    tableHtml += `<tr><td>${item.name}</td><td>${item.age}</td></tr>`;
  });
  tableHtml += '</tbody></table>';

  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div>
      <Editor
        onInit={(evt, editor) => (editorRef.current = editor)}
        initialValue={tableHtml}
        init={{
          height: 500,
          menubar: false,
          plugins: [
            'advlist autolink lists link image charmap print preview anchor',
            'searchreplace visualblocks code fullscreen',
            'insertdatetime media table paste code help wordcount'
          ],
          toolbar:
            'undo redo | formatselect | ' +
            'bold italic backcolor | alignleft aligncenter ' +
            'alignright alignjustify | bullist numlist outdent indent | ' +
            'removeformat | help',
          content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
        }}
      />
      <button onClick={log}>Log editor content</button>
    </div>
  );
};

export default MyComponent;
