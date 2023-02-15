import React from 'react';
import jsPDF from 'jspdf';

const TableToPDF = () => {
  const handleDownload = () => {
    const pdf = new jsPDF();
    pdf.addHTML(document.getElementById('table'), () => {
      pdf.save('table.pdf');
    });
  };

  return (
    <div>
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
      <button onClick={handleDownload}>Download</button>
    </div>
  );
};

export default TableToPDF;
