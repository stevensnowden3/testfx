import React, { useRef, useState, useEffect } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import EditorComponent from './EditorComponent';

const Hero = ({ selectedSample, param }) => {
  const editorRef = useRef(null);
  const [tinymceContent, setTinymceContent] = useState('');
  const tinykey = '1kr7x3llcbt7lt7f2dgo68kbeuepwmqby64fx68bgam3pspi';

  let tableHtml = '<table class="table table-bordered border-primary" style="color:green">';
  tableHtml += '<thead><tr><th>Name</th><th>Age</th></tr></thead>';
  tableHtml += '<tbody>';
  if (selectedSample && selectedSample.code === 'a') {
    param.a.forEach(name => {
      if (name) tableHtml += `<tr><td>${name}</td><td></td></tr>`;
    });
  } else if (selectedSample && selectedSample.code === 'b') {
    param.b.forEach(name => {
      if (name) tableHtml += `<tr><td>${name}</td><td></td></tr>`;
    });
  } else if (selectedSample && selectedSample.code === 'c') {
    param.c.forEach(name => {
      if (name)
        tableHtml += (
          <tr>
            <td>${name}</td>
            <td></td>
          </tr>
        );
    });
  } else if (selectedSample && selectedSample.code === 'd') {
    param.d.forEach(name => {
      if (name)
        tableHtml += (
          <tr>
            <td>${name}</td>
            <td></td>
          </tr>
        );
    });
  }

  tableHtml += '</tbody></table> ';

  return (
    <>
      <tr>
        <td colSpan={8}>
          <span className="me-2 text-warning">
            {selectedSample && selectedSample.code === 'a' ? (
              <div>
                <Editor
                  apiKey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                  }}
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
              </div>
            ) : selectedSample && selectedSample.code === 'b' ? (
              <div>
                <Editor
                  apiKey={tinykey}
                  initialValue={tableHtml}
                  onEditorChange={(content, editor) => {
                    setTinymceContent(content);
                  }}
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
              </div>
            ) : selectedSample && selectedSample.code === 'c' ? (
              <div>
                <EditorComponent tinykey={tinykey} initialValue={initialValue} onEditorChange={onEditorChange} />
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

export default Hero;
