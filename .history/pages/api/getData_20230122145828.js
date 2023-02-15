const express = require('express');
const router = express.Router();

// import the Checklist model
const Checklist = require('./models/Checklist')(sequelize, Sequelize);

router.get('/getData', (req, res) => {
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

  // add the dummy data to the checklist table
  Checklist.create(dummyData)
    .then(() => {
      // retrieve all data from the checklist table
      Checklist.findAll()
        .then(checklists => {
          // return the data as a JSON object
          res.json(checklists);
        })
        .catch(err => {
          console.error('Unable to retrieve data from checklist table:', err);
          res.status(500).send('Unable to retrieve data from checklist table');
        });
    })
    .catch(err => {
      console.error('Unable to add dummy data to checklist table:', err);
      res.status(500).send('Unable to add dummy data to checklist table');
    });
});

module.exports = router;
