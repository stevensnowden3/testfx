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
      {data.map((row, index) => (
        <div key={index}>
          <p>Material: {row.material_name}</p>
          <p>Supplier: {row.supplier_name}</p>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
