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
    res.status(200).json({ success: true });
    res.status(200).json({ message: 'hello' });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
