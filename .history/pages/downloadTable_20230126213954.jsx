import React, { useRef } from 'react';
import jsPDF from 'jspdf';

const TableToPDF = () => {
  const tableRef = useRef(null);

  const handleDownload = () => {
    const pdf = new jsPDF('p', 'pt', 'letter');
    pdf.text(35, 25, 'User Table');
    pdf.html(tableRef.current, {
      callback: function (doc) {
        doc.save('table.pdf');
      }
    });
  };

  return (
    <div>
      <table ref={tableRef}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
          </tr>
          <tr>
            <td>Jane Smith</td>
            <td>janesmith@example.com</td>
          </tr>
        </tbody>
      </table>
      <button onClick={handleDownload}>Download as PDF</button>
    </div>
  );
};

export default TableToPDF;
