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

    // Insert data into the database
    const [result] = await connection.execute('INSERT INTO poles (observation, comment) VALUES (?, ?)', [
      req.body.observation,
      req.body.comment
    ]);

    res.status(200).json({ success: true, message: 'Data added successfully', result });
    connection.end();
  } catch (error) {
    res.status(500).json({ success: false, error });
    connection.end();
  }
};
