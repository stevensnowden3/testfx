import { IncomingForm } from 'formidable';
import { promises as fs } from 'fs';

var mv = require('mv');

export const config = {
  api: {
    bodyParser: false
  }
};

export default async (req, res) => {
  console.log('Upload start');
  try {
    console.log('Upload start');
    const data = await new Promise((resolve, reject) => {
      const form = new IncomingForm();

      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        var oldPath = files.file.filepath;
        var newPath = `./public/uploads/${files.file.originalFilename}`;
        mv(oldPath, newPath, function (err) {});
        resolve({ fields, files });
      });
    });
    console.log('Upload successful');
  } catch (error) {
    console.log('Upload failed');
  }
};
