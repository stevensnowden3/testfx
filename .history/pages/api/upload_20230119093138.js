import fs from 'fs';

export default async (req, res) => {
  try {
    if (!req.files || Object.keys(req.files).length === 0) {
      return res.status(400).json({ success: false, error: 'No files were uploaded.' });
    }

    // The name of the input field (i.e. "file") is used to retrieve the uploaded file
    const file = req.files.file;

    // Use the mv() method to place the file in upload directory (i.e., "public/uploads")
    file.mv(`public/uploads/${file.name}`, function (err) {
      if (err) {
        return res.status(500).json({ success: false, error: err });
      }
      res.status(200).json({ success: true });
    });
  } catch (error) {
    res.status(500).json({ success: false, error });
  }
};
