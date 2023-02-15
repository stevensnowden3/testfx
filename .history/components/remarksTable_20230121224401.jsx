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

  let tableHtml = '<table class="table table-bordered border-primary" >';
  tableHtml += '<thead><tr><th>Umeme Requirement</th><th>Comment</th></tr></thead>';
  tableHtml += '<tbody>';

  const selectedCode = selectedSample && selectedSample.code;
  switch (selectedCode) {
    case 'a':
      param.a.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'b':
      param.b.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'c':
      param.c.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'd':
      param.d.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'e':
      param.e.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'f':
      param.f.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'g':
      param.g.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'h':
      param.h.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'i':
      param.i.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'j':
      param.j.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'k':
      param.k.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'l':
      param.l.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'm':
      param.m.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'n':
      param.n.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'o':
      param.o.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    case 'p':
      param.p.forEach(name => {
        tableHtml += `<tr><td>${name}</td><td></td></tr>`;
      });
      break;
    default:
      break;
  }

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
