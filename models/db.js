import mysql from 'mysql2/promise';

const connectionPromise = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'warehouse'
});

export default connectionPromise;
