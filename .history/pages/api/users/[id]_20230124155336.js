import mysql from 'mysql2/promise';
import { NextApiRequest, NextApiResponse } from 'next';

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
    // const id = req.params;

    const { id } = req.query;
    // Get current user roles
    const [rows] = await connection.execute(`SELECT roles FROM users WHERE id = ${id}`);
    const currentRoles = JSON.parse(rows[0].roles);

    // Update the roles
    if (action === 'add') {
      currentRoles[role] = true;
    } else if (action === 'remove') {
      delete currentRoles[role];
    }

    // Update the user in the database
    await connection.execute(`UPDATE users SET roles = '${JSON.stringify(currentRoles)}' WHERE id = ${userId}`);

    // Return the updated roles
    res.status(200).json({ success: true, data: currentRoles });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
};
