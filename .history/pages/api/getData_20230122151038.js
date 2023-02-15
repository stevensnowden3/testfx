import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('warehouse', 'root', '', {
  dialect: 'mysql',
  host: 'localhost'
});

const Checklist = sequelize.define('checklist', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  material_name: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  supplier_name: {
    type: Sequelize.STRING(150),
    allowNull: false
  },
  method_of_inspection: {
    type: Sequelize.STRING(50),
    allowNull: false
  },
  material_received: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  total_inspected: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  total_pass: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  total_failure: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  delivery_note: {
    type: Sequelize.STRING(150),
    allowNull: false
  },
  sample_inspected: {
    type: Sequelize.STRING(150),
    allowNull: false
  },
  delivery_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  inspection_date: {
    type: Sequelize.DATE,
    allowNull: false
  },
  filename: {
    type: Sequelize.STRING(100),
    allowNull: false
  },
  remark: {
    type: Sequelize.TEXT,
    allowNull: true
  },
  isApproved: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false
  },
  isRejected: {
    type: Sequelize.BOOLEAN,
    allowNull: true,
    defaultValue: false
  }
});

export default async (req, res) => {
  try {
    await sequelize.authenticate();
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
