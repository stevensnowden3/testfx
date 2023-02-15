import { useEffect, useState } from 'react';
import axios from 'axios';

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

  // Render the data
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th scope="col">material</th>
            <th scope="col">Supplier</th>
            <th scope="col">method_of_inspection</th>
            <th scope="col">material_received</th>
            {/* <th scope="col">total_inspected</th> */}
            {/* <th scope="col">total_pass</th> */}
            <th scope="col">total_failure</th>
            <th scope="col">delivery_note</th>
            <th scope="col">sample_inspected</th>
            <th scope="col">inspection_date</th>
            <th scope="col">delivery_date</th>
            <th scope="col">filename</th>
            <th scope="col">remark</th>
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
              <td>{row.delivery_date}</td>
              <td>{row.inspection_date}</td>
              <td>{row.filename}</td>
              <td>{row.remark}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyComponent;
