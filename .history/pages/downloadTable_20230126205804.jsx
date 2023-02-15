import React from 'react';
import { Document, Page } from 'react-pdf';
import { saveAs } from 'file-saver';

const TableToPDF = () => {
  const handleDownload = () => {
    const pdf = new jsPDF();
    pdf.addHTML(document.getElementById('table'), () => {
      pdf.save('table.pdf');
    });
  };

  return (
    <div>
      <button onClick={handleDownload}>Download PDF</button>
      <table id="table">
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
    </div>
  );
};

export default TableToPDF;
