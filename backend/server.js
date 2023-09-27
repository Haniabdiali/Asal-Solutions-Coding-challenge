// TODO: Import neccessary packages
const express = require('express');
const cors = require('cors')
const app = express();
app.use(express.json())
app.use(cors())

// TODO: Port number
const port = 8080;

// TODO: import Json file
const beneficiaries = require('./beneficiaries.json');

// TODO: get data from json file
app.get('/beneficiaries', (req, res) => {
  res.json(beneficiaries);
});

// TODO: Port listening
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});