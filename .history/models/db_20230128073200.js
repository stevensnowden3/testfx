import mysql from 'mysql2/promise';

let connection;

export default async () => {
  if (!connection) {
    connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'warehouse'
    });
  }
  return connection;
};
