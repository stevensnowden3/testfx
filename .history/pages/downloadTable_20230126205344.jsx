import React from 'react';
import { Document, Page } from 'react-pdf';

const TableToPDF = () => {
  return (
    <Document file={'your_file.pdf'}>
      <Page>
        <table>
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
      </Page>
    </Document>
  );
};
export default TableToPDF;
