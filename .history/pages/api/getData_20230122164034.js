import db from '../../models';

export default async (req, res) => {
  try {
    await db.sequelize.authenticate();
    console.log('Connection has been established successfully.');

    const dummyData = [
      {
        material_name: 'Example Material 1',
        supplier_name: 'Example Supplier 1',
        method_of_inspection: 'Example Inspection Method 1',
        material_received: 1234567890,
        total_inspected: 10,
        total_pass: 8,
        total_failure: 2,
        delivery_note: 'Example Delivery Note 1',
        sample_inspected: 'Example Sample Inspected 1',
        delivery_date: new Date(),
        inspection_date: new Date(),
        filename: 'example1.jpg',
        remark: 'Example Remark 1',
        isApproved: true,
        isRejected: false
      },
      {
        material_name: 'Example Material 2',
        supplier_name: 'Example Supplier 2',
        method_of_inspection: 'Example Inspection Method 2',
        material_received: 1234567890,
        total_inspected: 10,
        total_pass: 8,
        total_failure: 2,
        delivery_note: 'Example Delivery Note 2',
        sample_inspected: 'Example Sample Inspected 2',
        delivery_date: new Date(),
        inspection_date: new Date(),
        filename: 'example2.jpg',
        remark: 'Example Remark 2',
        isApproved: true,
        isRejected: false
      },
      {
        material_name: 'Example Material 3',
        supplier_name: 'Example Supplier 3',
        method_of_inspection: 'Example Inspection Method 3',
        material_received: 1234567890,
        total_inspected: 10,
        total_pass: 8,
        total_failure: 2,
        delivery_note: 'Example Delivery Note 3',
        sample_inspected: 'Example Sample Inspected 3',
        delivery_date: new Date(),
        inspection_date: new Date(),
        filename: 'example3.jpg',
        remark: 'Example Remark 3',
        isApproved: true,
        isRejected: false
      }
    ];

    // insert the dummy data into the database
    const insertedData = await Checklist.bulkCreate(dummyData);

    // // Select all from the database
    // const data = await Checklist.findAll();

    // Return the data as a JSON to the client
    res.status(200).json({ success: true, data: rows });
  } catch (error) {
    res.status(500).json({ success: false, error });
    connection.end();
  }
};
