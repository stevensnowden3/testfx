import { useEffect, useState, useRef } from 'react';
import axios from 'axios';
import moment from 'moment';
import jsPDF from 'jspdf';
import pdfMake from 'pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import htmlToPdfmake from 'html-to-pdfmake';
const MyComponent = () => {
  const [data, setData] = useState([]);
  const tableRef = useRef(null);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/api/getData');
        setData(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }

    fetchData();
  }, []);

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
    <div ref={tableRef}>
      <button onClick={printDocument}>Download as PDF</button>
      <table className="table table-bordered">
        <thead>
          <tr style={{ background: '#b5bd36' }}>
            <td colSpan="11" className="text-center text-white">
              <h2> Materials Inspected and Approved</h2>
            </td>
          </tr>
          <tr style={{ background: '#04392a', color: '#fff' }}>
            <td scope="col">material</td>
            <td scope="col">Supplier</td>
            <td scope="col">method_of_inspection</td>
            <td scope="col">material_received</td>
            {/* <th scope="col">total_inspected</th> */}
            {/* <th scope="col">total_pass</th> */}
            <td scope="col">total_failure</td>
            <td scope="col">Delivery&nbsp;Note</td>
            <td scope="col">Sample&nbsp;Inspected</td>
            <td scope="col">inspection_date</td>
            <td scope="col">delivery_date</td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.material_name}</td>
              <td>{row.supplier_name}</td>
              <td>{row.method_of_inspection}</td>
              <td>{row.material_received}</td>
              {/* <td>{row.total_inspected}</td> */}
              {/* <td>{row.total_pass}</td> */}
              <td>{row.total_failure}</td>
              <td>{row.delivery_note}</td>
              <td>{row.sample_inspected}</td>
              <td>{moment(row.delivery_date).format(' MMMM, Do hA')}</td>

              <td>{row.inspection_date}</td>
            </tr>
          ))}
          <tr style={{ background: '#04392a', color: '#fff' }}>
            <td colSpan={11}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyComponent;
