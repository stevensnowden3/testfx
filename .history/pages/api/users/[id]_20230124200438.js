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

    // console.log('i woks');
    const { id } = req.query;
    const { action } = req.query;
    console.log(id);
    console.log('hello action =' + action);

    // const userId = req.params.userId;
    // console.log(userId);

    // Get current user roles
    const [rows] = await connection.execute(`SELECT roles FROM users WHERE id = ${id}`);
    const currentRoles = JSON.parse(rows[0].roles);

    // Update the roles
    if (req.body.action === 'add') {
      currentRoles[req.body.role] = true;
    } else if (req.body.action === 'remove') {
      delete currentRoles[req.body.role];
    }

    // Update the user in the database
    await connection.execute(`UPDATE users SET roles = '${JSON.stringify(currentRoles)}' WHERE id = ${id}`);

    // Return the updated roles
    res.status(200).json({ success: true, data: currentRoles });
    console.log('Data entered');
  } catch (error) {
    console.log('Am failing');
    console.log(error);
    res.status(500).json({ success: false, error });
    4;
  }
};
