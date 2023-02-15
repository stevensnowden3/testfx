import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';
import html2pdf from 'html2pdf.js';

const MyComponent = () => {
  const [data, setData] = useState([]);

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

  const handleDownload = () => {
    const element = document.getElementById('table');
    const opt = {
      margin: [0, 0, 0, 0],
      filename: 'Report.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  // Render the data
  return (
    <div>
      <button className="btn btn-primary" onClick={handleDownload}>
        Download PDF
      </button>
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
            <td scope="col">filename</td>
            <td scope="col">remark</td>
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
              <td>{row.filename}</td>
              <td>{row.remark}</td>
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
