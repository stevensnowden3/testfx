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

    // Insert data into the database
    const [result] = await connection.execute(
      'INSERT INTO checklists (material_name, supplier_name, method_of_inspection, material_received, total_inspected, total_pass, total_failure, delivery_note, sample_inspected, delivery_date, inspectiondate, filename, remark) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
      [
        req.body.material_name,
        req.body.supplier_name,
        req.body.method_of_inspection,
        req.body.material_received,
        req.body.total_inspected,
        req.body.total_pass,
        req.body.total_failure,
        req.body.delivery_note,
        req.body.sample_inspected,
        req.body.delivery_date,
        req.body.inspectiondate,
        req.body.filename,
        req.body.remark
      ]
    );

    res.status(200).json({ success: true, message: 'Data added successfully', result });
    connection.end();
  } catch (error) {
    res.status(500).json({ success: false, error });
    connection.end();
  }
};
