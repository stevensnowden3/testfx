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
    const [rows] = await connection.execute(
      'SELECT id,material_name, supplier_name,method_of_inspection,material_received, total_inspected, total_pass, total_failure, delivery_note,sample_inspected, inspection_date, delivery_date  FROM checklisttest'
    );

    // Return the rows as a JSON to the client
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
