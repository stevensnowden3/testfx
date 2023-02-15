import mysql from 'mysql2/promise';

export default async (req, res) => {
  try {
    const connection = await mysql.createConnection({
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'warehouse'
    });

    await connection.connect();
    console.log('Database connection successful');
    const [rows] = await connection.execute('SELECT * FROM poles');
    res.status(200).json({ success: true, data: rows });
    res.status(200).json({ success: true });
    connection.end();
  } catch (error) {
    res.status(500).json({ success: false, error });
    connection.end();
  }
};
