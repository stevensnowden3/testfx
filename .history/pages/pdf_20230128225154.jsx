import React from 'react';
import { useEffect } from 'react';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';

const App = () => {
  useEffect(() => {
    pdfMake.vfs = pdfFonts.pdfMake.vfs;
  }, []);

  const printDocument = () => {
    const pdfTable = document.getElementById('divToPrint');
    var html = htmlToPdfmake(pdfTable.innerHTML);
    const documentDefinition = { content: html };
    pdfMake.createPdf(documentDefinition).open();
  };

  return (
    <div className="App container mt-5">
      <div id="divToPrint">
        <h2>therichpost.com</h2>
        Copy code
        <table class="table table-bordered">
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Website</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Ajay</td>
              <td>Malhotra</td>
              <td>Therichpost.com</td>
            </tr>
            <tr>
              <td>Ajay</td>
              <td>Malhotra</td>
              <td>Therichpost.com</td>
            </tr>
            <tr>
              <td>Ajay</td>
              <td>Malhotra</td>
              <td>Therichpost.com</td>
            </tr>
            <tr>
              <td>Ajay</td>
              <td>Malhotra</td>
              <td>Therichpost.com</td>
            </tr>
            <tr>
              <td>Jassa</td>
              <td>Malhotra</td>
              <td>Therichpost.com</td>
            </tr>
          </tbody>
        </table>
      </div>

      <button class="btn btn-primary" onClick={printDocument}>
        Export To PDF
      </button>
    </div>
  );
};

export default App;
