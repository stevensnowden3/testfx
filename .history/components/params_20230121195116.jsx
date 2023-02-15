import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const Hero = ({ selectedSample, param }) => {
  const [tinymceContent, setTinymceContent] = useState('');
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
                <>
                  <Editor
                    apiKey={tinykey}
                    initialValue={tinymceContent}
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
                    }}>
                    <table className="table table-bordered border-primary" style={{ color: 'green' }}>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Age</th>
                        </tr>
                      </thead>
                      <tbody>
                        {param.a.map((name, index) => (
                          <tr key={index}>
                            <td>{name}</td>
                            <td></td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </Editor>
                </>
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
