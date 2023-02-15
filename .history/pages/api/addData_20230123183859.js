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
      console.log(req.body.material_name.name, req.body.supplier_name);
      const [result] = await connection.execute(
        'INSERT INTO checklisttest (material_name, supplier_name) VALUES (?, ? )',
        [req.body.material_name.name, req.body.supplier_name]
      );
      if (result) {
        res.status(200).json({ success: true, message: 'Data added successfully', result });
      } else {
        res.status(500).json({ success: false, message: 'Error adding data to the database' });
      }
    } catch (err) {
      console.log(req.body.material_name.name, req.body.supplier_name);
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
