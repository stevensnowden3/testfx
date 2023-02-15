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
        console.log('Upload failed');
        let oldPath = files.file.filepath;
        let newPath = `./public/uploads/${files.file.originalFilename}`;
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
