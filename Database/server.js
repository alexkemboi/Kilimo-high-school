const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql");
const cors = require("cors");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "kilimohighschool",
});

connection.connect((error) => {
  if (error) {
    console.error("Error connecting to database", error);
  } else {
    console.log("Connected to database");
  }
});

app.use(bodyParser.json());
app.use(cors());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});


// handle POST requests to /insertStudent
app.post('/insertStudent', (req, res) => {
  const studentValues = req.body;

  // insert the student values into the database
  connection.query('INSERT INTO students SET ?', studentValues, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Failed to insert student values');
    } else {
      console.log('Student values successfully inserted');
      res.status(200).send('Student values successfully inserted');
    }
  });
});



app.post('/insertStream', (req, res) => {
  const { stream, className, year, teacher } = req.body;
  const sql = 'INSERT INTO stream (StreamName, ClassName, AcademicYear, Teacher) VALUES (?, ?, ?, ?)';
  const values = [stream, className, year, teacher];

  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error inserting data into database');
    } else {
      res.send('Data inserted successfully');
    }
  });
});




app.post('/insertClass', (req, res) => {
  const { numberOfStudents, className, subject, teacherName } = req.body;
  const sql = 'INSERT INTO classes (NoStudents, ClassName, NoSubjects,ClassTeacher) VALUES (?, ?, ?, ?)';
  const values = [numberOfStudents, className, subject, teacherName];

  connection.query(sql, values, (error, results, fields) => {
    if (error) {
      console.error(error);
      res.status(500).send('Error inserting data into database');
    } else {
      res.send('Data inserted successfully');
    }
  });
});



// Define the GET route to select all records from the students table
app.get('/selectStudents', (req, res) => {
    // Query the database
    connection.query('SELECT * FROM students', (error, results, fields) => {
      if (error) throw error;
      // Return the results as JSON
      res.json(results);
  });
});

app.get('/selectStream', (req, res) => {
  // Query the database
  connection.query('SELECT * FROM stream', (error, results, fields) => {
    if (error) throw error;
    // Return the results as JSON
    res.json(results);
});
});

app.get('/selectClasses', (req, res) => {
  // Query the database
  connection.query('SELECT * FROM classes', (error, results, fields) => {
    if (error) throw error;
    // Return the results as JSON
    res.json(results);
});
});




const port = 3000;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});