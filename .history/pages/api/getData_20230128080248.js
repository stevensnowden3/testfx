import connectionPromise from '../../models/db';
import { requireAuth } from '@auth0/nextjs-auth0';

export default requireAuth(async (req, res) => {
  try {
    const connection = await connectionPromise;
    await connection.connect();

    // Select all from the database
    const [rows] = await connection.execute(
      'SELECT id,material_name, supplier_name,method_of_inspection,material_received, total_inspected, total_pass, total_failure, delivery_note,sample_inspected, inspection_date  FROM checklisttest'
    );

    // Return the rows as a JSON to the client
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, error });
    console.log(error);
  }
});
