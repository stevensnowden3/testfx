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
    if (req.method === 'DELETE') {
      // Delete the selected row
      await connection.execute('DELETE FROM checklisttest WHERE id = ?', [id]);
      // Return a message to the client
      res.status(200).json({ success: true, message: 'Checklist deleted successfully' });
    } else if (req.method === 'PATCH') {
      const {
        status,
        approved_by,
        material_name,
        supplier_name,
        method_of_inspection,
        material_received,
        total_inspected,
        total_pass,
        total_failure,
        remark,
        inspection_technique
      } = req.body;
      console.log(remark);

      if (status !== undefined && approved_by !== undefined && Object.keys(req.body).length === 2) {
        // Update the status and approved_by fields in the table
        await connection.execute(
          `UPDATE checklisttest SET status = ?, approved_by = CONCAT(approved_by, ' -> ', ?) WHERE id = ?`,
          [status, approved_by, id]
        );
      }

      // Update the selected row
      else
        await connection.execute(
          'UPDATE checklisttest SET material_name = ?, supplier_name = ?, method_of_inspection = ?,inspection_technique=?, material_received = ?, total_inspected = ?, total_pass = ?, total_failure = ?,remark = ? WHERE id = ?',
          [
            material_name,
            supplier_name,
            method_of_inspection,
            inspection_technique,
            material_received,
            total_inspected,
            total_pass,
            total_failure,
            remark,
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
