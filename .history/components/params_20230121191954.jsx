import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const Hero = ({ selectedSample, param }) => {
  const [dummyArray] = useState([
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 30 },
    { id: 3, name: 'Bob', age: 35 },
    { id: 4, name: 'Sara', age: 40 }
  ]);

  let tableHtml = '<table class="table table-bordered border-primary" style="color:green">';
  tableHtml += '<thead><tr><th>Name</th><th>Age</th></tr></thead>';
  tableHtml += '<tbody>';
  dummyArray.forEach(item => {
    tableHtml += `<tr><td>${item.name}</td><td>${item.age} </td></tr>`;
  });
  tableHtml += '</tbody></table> ';

  const [tinymceContent, setTinymceContent] = useState(tableHtml);
  const tinykey = '1kr7x3llcbt7lt7f2dgo68kbeuepwmqby64fx68bgam3pspi';

  return (
    <>
      <tr>
        <td colSpan={8}>
          <span className="me-2 text-warning">
            {selectedSample && selectedSample.code == 'a' ? (
              <div>
                {param.a.map(name => (
                  <span className="me-2">{name},</span>
                ))}
              </div>
            ) : selectedSample && selectedSample.code === 'b' ? (
              <div>
                {param.b.map(name => (
                  <span className="me-2">{name},</span>
                ))}
              </div>
            ) : selectedSample && selectedSample.code === 'c' ? (
              <div>
                {param.c.map(name => (
                  <span className="me-2">{name},</span>
                ))}
              </div>
            ) : selectedSample && selectedSample.code === 'd' ? (
              <div>
                {param.d.map(name => (
                  <span className="me-2">{name},</span>
                ))}
              </div>
            ) : selectedSample && selectedSample.code === 'e' ? (
              <div>
                {param.e.map(name => (
                  <span className="me-2">{name},</span>
                ))}
              </div>
            ) : (
              <>
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
              </>
            )}
          </span>
        </td>
      </tr>
    </>
  );
};

export default Hero;
