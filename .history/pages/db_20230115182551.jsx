import React, { useState } from 'react';
import Sequelize from 'sequelize';

const TestDatabaseConnection = () => {
  const [status, setStatus] = useState('Checking connection...');

  // Define the connection details
  const sequelize = new Sequelize('warehouse', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
  });

  // Test the connection
  sequelize
    .authenticate()
    .then(() => {
      setStatus('Success: Connected to the database.');
    })
    .catch(err => {
      setStatus(`Error: ${err.message}`);
    });

  return <div>{status}</div>;
}

export default TestDatabaseConnection;
