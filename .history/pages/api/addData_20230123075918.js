import mysql from 'mysql2/promise';

export default async (req, res) => {
  try {
    let connection;
    try {
      connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'warehouse'
      });
    } catch (err) {
      res.status(500).json({ success: false, error: 'Failed to connect to database' });
      return;
    }
    await connection.connect();

    // Insert data into the database
    try {
      const [result] = await connection.execute(
        'INSERT INTO checklisttest (material_name, supplier_name, method_of_inspection, material_received, total_inspected, total_pass, total_failure, delivery_note, sample_inspected, delivery_date, inspectiondate, filename, remark) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)',
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
    } catch (err) {
      res.status(500).json({ success: false, error: 'Failed to execute query' });
      return;
    }
    res.status(200).json({ success: true, message: 'Data added successfully', result });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
