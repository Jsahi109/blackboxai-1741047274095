const express = require('express');
const multer = require('multer');
const uploadController = require('../controllers/uploadController.ts'); // Updated to TypeScript

const router = express.Router();
const upload = multer({ dest: 'uploads/' }); // Directory for uploaded files

// GET route for the upload form
router.get('/', (req, res) => {
  res.render('index');
});

// POST route for handling file uploads
router.post('/upload', upload.single('csvFile'), uploadController.handleUpload);

module.exports = router;
