import db from '../../models';
import Checklist from '../../models/checklist';

export default async (req, res) => {
  try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
    // create some dummy data
    const dummyData = {
      material_name: 'Example Material',
      supplier_name: 'Example Supplier',
      method_of_inspection: 'Example Inspection Method',
      material_received: 1234567890,
      total_inspected: 10,
      total_pass: 8,
      total_failure: 2,
      delivery_note: 'Example Delivery Note',
      sample_inspected: 'Example Sample Inspected',
      delivery_date: new Date(),
      inspection_date: new Date(),
      filename: 'example.jpg',
      remark: 'Example Remark',
      isApproved: true,
      isRejected: false
    };

    await Checklist.create(dummyData);

    // Select all from the database
    const data = await Checklist.findAll();

    // Return the data as a JSON to the client
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
