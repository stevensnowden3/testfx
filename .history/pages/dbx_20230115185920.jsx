import React, { useState } from 'react';
import mysql from 'mysql2';

const TestDatabaseConnection = () => {
  const [status, setStatus] = useState('Checking connection...');

  // Connect to the database using the default credentials
 const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'iroot',
    database: 'warehouse',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

pool.promise().getConnection()
.then(conn => {
    setStatus('Success: Connected to the database.');
    conn.release();
})
.catch(err => {
    console.log(err)
     setStatus(`Error: ${err.message}`);
});

  return <div>{status}</div>;
}

export default TestDatabaseConnection;
