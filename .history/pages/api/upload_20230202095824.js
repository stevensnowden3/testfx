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
    const form = new IncomingForm();
    form.parse(req, (err, fields, files) => {
      if (err) {
        console.log('Upload failed');
        throw err;
      }

      var oldPath = files.file.path;
      var newPath = `./public/uploads/${files.file.name}`;

      mv(oldPath, newPath, function (err) {
        if (err) {
          console.log('Upload failed');
          throw err;
        }
        console.log('Upload successful');
        res.status(200).json({ fields, files });
      });
    });
  } catch (error) {
    console.error(error);
  }
};
