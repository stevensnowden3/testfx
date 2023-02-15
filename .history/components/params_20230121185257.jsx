import React, { useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';

const Hero = ({ selectedSample, param }) => (

     let tableHtml = '<table class="table table-bordered border-primary" style="color:green">';
  tableHtml += '<thead><tr><th>Name</th><th>Age</th></tr></thead>';
  tableHtml += '<tbody>';
  dummyArray.forEach(item => {
    tableHtml += `<tr><td>${item.name}</td><td>${item.age} </td></tr>`;
  });
  tableHtml += '</tbody></table> ';

  const [tinymceContent, setTinymceContent] = useState(tableHtml);
  const tinykey = '1kr7x3llcbt7lt7f2dgo68kbeuepwmqby64fx68bgam3pspi';
  <>
    <td colSpan={4}>
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
          'none'
        )}
      </span>
    </td>
  </>
);

export default Hero;
