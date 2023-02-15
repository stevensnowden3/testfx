import connectionPromise from '../../models/db';
import { withApiAuthRequired, getSession } from '@auth0/nextjs-auth0';

export default withApiAuthRequired(async (req, res) => {
  const session = getSession(req, res);
  try {
    const connection = await connectionPromise;
    await connection.connect();

    // Select all from the database

    console.log(req.query.approved);
    if (req.query.approved === 'yes') {
      const [rows] = await connection.execute(
        'SELECT id,material_name, supplier_name,method_of_inspection,inspection_technique,location,material_received, total_inspected, total_pass, total_failure, delivery_note,sample_inspected, inspection_date,created_by, status FROM checklisttest WHERE status=0'
      );

      // Return the rows as a JSON to the client
      res.status(200).json({ success: true, data: rows });
    } else if (req.query.approved === 'no') {
      const [rows] = await connection.execute(
        'SELECT id,material_name, supplier_name,method_of_inspection,inspection_technique,location,material_received, total_inspected, total_pass, total_failure, delivery_note,sample_inspected,status, inspection_date,created_by FROM checklisttest WHERE status=-1'
      );

      // Return the rows as a JSON to the client
      res.status(200).json({ success: true, data: rows });
    } else {
      const [rows] = await connection.execute(
        'SELECT id,material_name, supplier_name,method_of_inspection,inspection_technique,location,material_received, total_inspected, total_pass, total_failure, delivery_note,sample_inspected, inspection_date,created_by, status FROM checklisttest '
      );

      // Return the rows as a JSON to the client
      res.status(200).json({ success: true, data: rows });
    }
  } catch (error) {
    res.status(500).json({ success: false, error });
    console.log(error);
  }
});
