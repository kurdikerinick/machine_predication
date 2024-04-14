const express = require('express');
const bodyParser = require('body-parser');
const multer = require('multer');
const path = require('path');
const mysql = require('mysql');
const app = express();
const cors = require('cors'); // Import the cors middleware


app.use(bodyParser.json());
app.use(cors()); // Enable CORS for all routes

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'webregistration',
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to database:', err);
  } else {
    console.log('Connected to database');
  }
});

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}_${path.basename(file.originalname)}`);
  },
});

const upload = multer({ storage });

app.post('/api/Person', upload.single('resumeData'), (req, res) => {
  const formData = req.body;
  formData.resumeData = req.file.filename; // Assign the uploaded file's filename to the form data

  db.query('INSERT INTO Person SET ?', formData, (error, results) => {
    if (error) {
      console.error('Error inserting data:', error);
      res.status(500).send('Error inserting data');
    } else {
      console.log('Data inserted:', results);
      res.status(200).send('Data inserted');
    }
  });
});

const port = process.env.PORT || 9000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
