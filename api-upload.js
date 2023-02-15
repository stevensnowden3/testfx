const express = require('express');
const multer = require('multer');

const app = express();
const port = 3007;
const upload = multer({ dest: 'public/uploads/' });

app.post('/api/upload', upload.single('file'), (req, res) => {
    res.send('File uploaded successfully!');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}, (err) => {
    console.log(`Server failed to start: ${err}`);
});
