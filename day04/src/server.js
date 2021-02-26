'use strict';

// bring in apps
const express = require('express');
const validator = require('./middleware/validator.js');
const logger = require('./middleware/logger.js');
const notFoundHandler = require('./handlers/notFoundHandler.js')
const errorHandler = require('./handlers/errorHandler.js')
const app = express();

// global middleware
app.use(logger)

// routes
// QUERY STRING
// to pass in a name: localhost:3000/person?name=jenner
app.get('/person', validator, (req, res) => {
  res.status(200).json({name: req.query.name})
})

// parameters
app.get('/pet/:name', (req, res) => {
  res.status(200).json({name: req.params.name})
})

// function to express to server
function start(port){
  app.listen(port, () => {
    console.log(`listen on port: ${port}`);
  });
}

app.use('*', notFoundHandler)
app.use(errorHandler)

module.exports = {
  app: app,
  start: start
}