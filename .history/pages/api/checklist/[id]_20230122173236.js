import mysql from 'mysql2/promise';
import { useRouter } from 'next/router';

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
    const router = useRouter();
    const { id } = router.query;

    // Select all from the database
    const [rows] = await connection.execute('SELECT * FROM checklisttest WHERE id = ?', [id]);

    // Return the rows as a JSON to the client
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, error });
  }
};
