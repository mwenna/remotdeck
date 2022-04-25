const express = require("express");
const path = require('path');
const mysql = require("mysql");
const fs = require("fs");

// hiding sensitive data in .env file
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
dotenv.config({ path: './.env'});

const app = express();

// connects to remotedeck database
const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

// error or successful connection to remotedeck database
db.connect( (error) => {
  if(error) {
    console.log(error)
  } else {
    console.log("RemoteDeck DB connected succesfully")
  }
})

// directory is for CSS or JS for front end
const publicDirectory = path.join(__dirname, './public');
// makes sure that app is using this public directory
app.use(express.static(publicDirectory));

// parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: false }));
// parse JSON bodies (as sent by API clients)
app.use(express.json());
app.use(cookieParser());

app.set('view engine', 'hbs');

// define the routes pages
app.use('/', require('./routes/pages'));
app.use('/auth', require('./routes/auth'));




app.listen(5000, () => {
  console.log("server successfully started on port 4000");
})
