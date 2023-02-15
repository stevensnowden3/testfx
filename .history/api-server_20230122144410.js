require('dotenv').config({ path: './.env.local' });

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const { expressjwt: jwt } = require('express-jwt');
const jwksRsa = require('jwks-rsa');

const multer = require('multer');
const path = require('path');
// const fs = require('fs');

const app = express();
const port = process.env.API_PORT || 3001;
const baseUrl = process.env.AUTH0_BASE_URL;
const issuerBaseUrl = process.env.AUTH0_ISSUER_BASE_URL;
const audience = process.env.AUTH0_AUDIENCE;

if (!baseUrl || !issuerBaseUrl) {
  throw new Error('Please make sure that the file .env.local is in place and populated');
}

if (!audience) {
  console.log('AUTH0_AUDIENCE not set in .env.local. Shutting down API server.');
  process.exit(1);
}

app.use(morgan('dev'));
app.use(helmet());
app.use(cors({ origin: baseUrl }));

const checkJwt = jwt({
  secret: jwksRsa.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: `${issuerBaseUrl}/.well-known/jwks.json`
  }),
  audience: audience,
  issuer: `${issuerBaseUrl}/`,
  algorithms: ['RS256']
});

app.get('/api/shows', checkJwt, (req, res) => {
  res.send({
    msg: 'Your access token was successfully validated!'
  });
});

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + '.' + file.mimetype.split('/')[1]);
  }
});
const upload = multer({ storage: storage }).single('file');

app.post('/api/upload', (req, res) => {
  upload(req, res, function (err) {
    if (err instanceof multer.MulterError) {
      return res.status(500).json(err);
    } else if (err) {
      return res.status(500).json(err);
    }
    return res.status(200).send(req.file);
  });
});

const Checklist = require('./models/checklist');

const db = require('./models');
db.sequelize
  .sync()
  .then(req => {
    const data = [
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

    data.forEach(async d => {
      await Checklist.create(d);
    });

    console.log('models synced successfully');

    const server = app.listen(port, () => console.log(`API Server listening on port ${port}`));
    process.on('SIGINT', () => server.close());
  })
  .catch(err => {
    console.log('Error in syncing models ', err);
  });
