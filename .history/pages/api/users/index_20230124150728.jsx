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

    // Select all from the database
   const users = await db.query('SELECT id, username, email, roles FROM users');
    for(let i = 0; i < users.length; i++) {
      users[i].roles = JSON.parse(users[i].roles);
    // Return the rows as a JSON to the client
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
