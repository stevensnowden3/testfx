import React, { useRef } from 'react';
import jsPDF from 'jspdf';

const TableToPDF = () => {
  const tableRef = useRef(null);

  const handleDownload = () => {
    const pdf = new jsPDF();

    pdf.text(35, 25, 'User Table');
    pdf.addHTML(
      tableRef.current,
      15,
      40,
      {
        width: 170
      },
      () => {
        pdf.save('table.pdf');
      }
    );
  };

  return (
    <>
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
    </>
  );
};

export default TableToPDF;
