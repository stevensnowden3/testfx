import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('warehouse', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

export default async (req, res) => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
    // create some dummy data

    const dummyData = [
      {
        material_name: 'Material 1',
        supplier_name: 'Supplier 1',
        method_of_inspection: 'Visual Inspection',
        material_received: 1234567890,
        total_inspected: 100,
        total_pass: 90,
        total_failure: 10,
        delivery_note: 'DN-0001',
        sample_inspected: 'IN-0001',
        delivery_date: '2022-01-01',
        inspection_date: '2022-01-02',
        filename: 'material1.jpg',
        remark: 'Material passed inspection'
      },
      {
        material_name: 'Material 2',
        supplier_name: 'Supplier 2',
        method_of_inspection: 'Visual Inspection',
        material_received: 1234567890,
        total_inspected: 100,
        total_pass: 80,
        total_failure: 20,
        delivery_note: 'DN-0002',
        sample_inspected: 'IN-0002',
        delivery_date: '2022-01-01',
        inspection_date: '2022-01-02',
        filename: 'material2.jpg',
        remark: 'Material failed inspection'
      },
      {
        material_name: 'Material 3',
        supplier_name: 'Supplier 3',
        method_of_inspection: 'Visual Inspection',
        material_received: 1234567890,
        total_inspected: 100,
        total_pass: 75,
        total_failure: 25,
        delivery_note: 'DN-0003',
        sample_inspected: 'IN-0003',
        delivery_date: '2022-01-01',
        inspection_date: '2022-01-02',
        filename: 'material3.jpg',
        remark: 'Material failed inspection'
      },
      {
        material_name: 'Material 4',
        supplier_name: 'Supplier 4',
        method_of_inspection: 'Visual Inspection',
        material_received: 1234567890,
        total_inspected: 100,
        total_pass: 95,
        total_failure: 5,
        delivery_note: 'DN-0004',
        sample_inspected: 'IN-0004',
        delivery_date: '2022-01-01',
        inspection_date: '2022-01-02',
        filename: 'material4.jpg',
        remark: 'Material passed inspection'
      },
      {
        material_name: 'Material 5',
        supplier_name: 'Supplier 5',
        method_of_inspection: 'Visual Inspection',
        material_received: 1234567890,
        total_inspected: 100,
        total_pass: 85,
        total_failure: 15,
        delivery_note: 'DN-0005',
        sample_inspected: 'IN-0005',
        delivery_date: '2022-01-01',
        inspection_date: '2022-01-02',
        filename: 'material5.jpg',
        remark: 'Material failed inspection'
      }
    ];

    await Checklist.create(dummyData);

    // Select all from the database
    const data = await Checklist.findAll();

    // Return the data as a JSON to the client
    res.status(200).json({ success: true, data });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
