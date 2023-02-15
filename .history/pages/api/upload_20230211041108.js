import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';

var mv = require('mv');

export const config = {
  api: {
    bodyParser: false
  }
};

export default async (req, res) => {
  try {
    const data = await new Promise((resolve, reject) => {
      const form = new IncomingForm();

      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        let oldPath = files.file.path;
        let newPath = `./public/uploads/${Date.now()}_${files.file.name}`;
        mv(oldPath, newPath, function (err) {});
        resolve({ fields, files });
      });
    });
    console.log('Upload successful');
    res.setHeader('Content-Type', 'application/json');
    res.status(200).send({ message: 'Upload successful' });
  } catch (error) {
    console.log('Upload failed');
    res.setHeader('Content-Type', 'application/json');
    res.status(500).send({ message: 'Upload failed' });
  }
};
