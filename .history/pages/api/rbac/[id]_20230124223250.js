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
    const { id } = req.query;
    console.log('Id is =' + id);
    // Get
    // Get current user roles
    const [rows] = await connection.execute(`SELECT roles FROM users WHERE id = ${id}`);
    const currentRoles = JSON.parse(rows[0].roles);

    // Return the roles
    res.status(200).json({ success: true, data: currentRoles });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
};
