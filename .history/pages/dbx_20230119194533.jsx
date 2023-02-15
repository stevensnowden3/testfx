import { useEffect, useState } from 'react';
import mysql from 'mysql2/promise';

const MyComponent = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const connection = await mysql.createConnection({
          host: 'localhost',
          user: 'root',
          password: '',
          database: 'warehouse'
        });

        await connection.connect();

        // Select all from the database
        const [rows] = await connection.execute('SELECT * FROM tableName');

        // Store the data in the state
        setData(rows);

        connection.end();
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
          <p>Observation: {row.observation}</p>
          <p>Comment: {row.comment}</p>
        </div>
      ))}
    </div>
  );
};

export default MyComponent;
