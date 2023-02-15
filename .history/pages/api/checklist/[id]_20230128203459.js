import connectionPromise from '../../../models/db';
import { NextApiRequest, NextApiResponse } from 'next';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async (req, res) => {
  const session = getSession(req, res);
  try {
    const connection = await connectionPromise;

    await connection.connect();

    // Get the id from the request param
    // const id = req.params;

    const { id } = req.query;
    if (req.method === 'PATCH') {
      const {
        material_name,
        supplier_name,
        method_of_inspection,
        material_received,
        total_inspected,
        total_pass,
        total_failure
      } = req.body;
      // Update the selected row
      await connection.execute(
        'UPDATE checklisttest SET material_name = ?, supplier_name = ?, method_of_inspection = ?, material_received = ?, total_inspected = ?, total_pass = ?, total_failure = ? WHERE id = ?',
        [
          material_name,
          supplier_name,
          method_of_inspection,
          material_received,
          total_inspected,
          total_pass,
          total_failure,
          id
        ]
      );
      // Select the updated row
      const [rows] = await connection.execute('SELECT * FROM checklisttest WHERE id = ?', [id]);
      // Return the updated row as a JSON to the client
      res.status(200).json({ success: true, message: 'Checklist updated successfully', data: rows });
      console.log('sucess!');
    } else {
      // Select all from the database
      const [rows] = await connection.execute('SELECT * FROM checklisttest WHERE id = ?', [id]);
      // Return the rows as a JSON to the client
      res.status(200).json({ success: true, data: rows });
    }
  } catch (error) {
    console.log(error.message);
    console.log(req.params);
    res.status(500).json({ success: false, error });
  }
});