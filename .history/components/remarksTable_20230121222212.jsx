import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import EditorComponent from './EditorComponent';

const RemarksTable = ({ selectedSample, param, handleEditorContent }) => {
  const editorRef = useRef(null);

  const [editorContent, setEditorContent] = useState('');

  const handleEditorChange = content => {
    setEditorContent(content);
  };

  const [tinymceContent, setTinymceContent] = useState('');
  const tinykey = '1kr7x3llcbt7lt7f2dgo68kbeuepwmqby64fx68bgam3pspi';

  let tableHtml = '<table class="table table-bordered border-primary" style="color:green">';
  tableHtml += '<thead><tr><th>Name</th><th>Age</th></tr></thead>';
  tableHtml += '<tbody>';
  const selectedCode = selectedSample && selectedSample.code;
  selectedCode === 'aa'
    ? param.a.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      })
    : selectedSample && selectedSample.code === 'b'
    ? param.b.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      })
    : selectedSample && selectedSample.code === 'c'
    ? param.c.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      })
    : selectedSample && selectedSample.code === 'd'
    ? param.d.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      })
    : null;

  tableHtml += '</tbody></table> ';

  return (
    <>
      <tr>
        <td colSpan={8}>
          <span className="me-2 text-warning">
            {selectedSample && selectedSample.code === 'a' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'b' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : selectedSample && selectedSample.code === 'c' ? (
              <div>
                <EditorComponent
                  tinykey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                    handleEditorContent(content);
                  }}
                />
              </div>
            ) : (
              <>
                <p>none</p>
              </>
            )}
          </span>
        </td>
      </tr>
    </>
  );
};

export default RemarksTable;
