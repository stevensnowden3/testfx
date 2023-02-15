import { useEffect, useState } from 'react';
import axios from 'axios';
import moment from 'moment';

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

  // Function to handle view button click
  const handleView = id => {
    // Code to handle view logic
    console.log('View button clicked for id: ', id);
  };

  // Function to handle delete button click
  const handleDelete = id => {
    // Code to handle delete logic
    console.log('Delete button clicked for id: ', id);
    // Call api to delete the data
    axios
      .delete(`/api/deleteData/${id}`)
      .then(response => {
        console.log(response);
        // Remove the deleted data from the table
        setData(data.filter(item => item.id !== id));
      })
      .catch(error => console.log(error));
  };

  // Render the data
  return (
    <div>
      <table className="table table-bordered">
        <thead>
          <tr style={{ background: '#b5bd36' }}>
            <td colSpan="13" className="text-center text-white">
              <h2> Materials Inspected and Approved</h2>
            </td>
          </tr>
          <tr style={{ background: '#04392a', color: '#fff' }}>
            <td scope="col">material</td>
            <td scope="col">Supplier</td>

            <td scope="col">total_failure</td>
            <td scope="col">Delivery&nbsp;Note</td>
            <td scope="col">Sample&nbsp;Inspected</td>

            <td scope="col">delivery_date</td>

            <td scope="col">remark</td>
            <td scope="col">Actions</td>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.material_name}</td>
              <td>{row.supplier_name}</td>

              <td>{row.total_failure}</td>
              <td>{row.delivery_note}</td>
              <td>{row.sample_inspected}</td>
              <td>{moment(row.delivery_date).format(' MMMM, Do hA')}</td>

              <td>{row.remark}</td>
              <td>
                <button className="btn btn-primary" onClick={() => handleView(row.id)}>
                  View
                </button>
                <button className="btn btn-danger" onClick={() => handleDelete(row.id)}>
                  Delete
                </button>
              </td>
            </tr>
          ))}
          <tr style={{ background: '#04392a', color: '#fff' }}>
            <td colSpan={13}></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default MyComponent;
