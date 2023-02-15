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

    // Get the id from the request param
    const { id } = req.params;

    // Select all from the database
    const [rows] = await connection.execute('SELECT * FROM checklists WHERE id = ?', [id]);

    // Return the rows as a JSON to the client
    res.status(200).json({ success: true, data: rows });

    connection.end();
  } catch (error) {
    res.status(500).json({ success: false, error });
    connection.end();
  }
};
