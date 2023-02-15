import connectionPromise from '../../../models/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default async (req, res) => {
  try {
    const connection = await connectionPromise;

    await connection.connect();

    // Get the id from the request param
    // const id = req.params;

    const { id } = req.query;
    // Select all from the database
    const [rows] = await connection.execute('SELECT * FROM checklisttest WHERE id = ?', [id]);

    // Return the rows as a JSON to the client
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    console.log(error.message);
    console.log(req.params);
    res.status(500).json({ success: false, error });
  }
};
