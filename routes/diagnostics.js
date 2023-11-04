const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile('./db/diagnostics.json').then((data) => res.json(JSON.parse(data)))
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  // TODO: Logic for appending data to the db/diagnostics.json file
  const newDiagPost = {
    time : Date.now(),
    error_id : uuidv4(),
    errors : req.body,
  };
  readAndAppend(newDiagPost, './db/diagnostics.json');

  const response = {
    status: 'success',
    body: newDiagPost,
  };

  res.json(response);

});

module.exports = diagnostics;
