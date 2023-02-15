import connectionPromise from '../../../models/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async (req, res) => {
  const session = getSession(req, res);
  try {
    const connection = await connectionPromise;

    await connection.connect();
    const { id } = req.query;
    console.log('Id is =' + id);
    // Get
    // Get current user roles
    const [rows] = await connection.execute(`SELECT roles FROM users WHERE id = ${id}`);
    const currentRoles = JSON.parse(rows[0].roles);
    const roles = Object.keys(currentRoles);
    // Return the roles
    res.status(200).json({ success: true, roles });
    console.log('ROles =' + Object.keys(currentRoles));
    connection.end();
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
});
