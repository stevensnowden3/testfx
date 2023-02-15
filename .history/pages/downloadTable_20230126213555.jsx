import React from 'react';
// import html2pdf from 'html2pdf.js';
import jsPDF from 'jspdf';

const TableToPDF = () => {
  const handleDownload1 = () => {
    const element = document.getElementById('table');
    const opt = {
      margin: [0, 0, 0, 0],
      filename: 'table.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };
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
      <button onClick={handleDownload}>Download PDF</button>
    </div>
  );
};

export default TableToPDF;
