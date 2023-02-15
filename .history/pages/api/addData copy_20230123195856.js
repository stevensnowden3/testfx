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
      console.log('Failed to connect');
      return;
    }
    await connection.connect();

    // Insert data into the database
    try {
      const [result] = await connection.execute(
        'INSERT INTO checklisttest (material_name, supplier_name,method_of_inspection,material_received, total_inspected) VALUES (?, ?,?,?,? )',
        [
          req.body.material_name,
          req.body.supplier_name,
          req.body.method_of_inspection,
          req.body.material_received,
          req.body.total_inspected
        ]
      );
      if (result) {
        res.status(200).json({ success: true, message: 'Data added successfully', result });
      } else {
        res.status(500).json({ success: false, message: 'Error adding data to the database' });
      }
    } catch (err) {
      console.log('tryin to connect');
      res.status(500).json({ success: false, error: 'Failed to execute query' });
      console.log(err);
      return;
    }
    res.status(200).json({ success: true, message: 'Data added successfully', result });
    console.log('Success');
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, error });
  }
};
