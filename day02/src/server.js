'use strict';

const express = require('express');
const app = express()

function serverStart(port) {
  app.listen(port, () => {
    console.log(`listening on port: ${port}`)
  })
}

app.get('/', (req, res) => {
  console.log('Entered homepage...')
  res.status(200).send('Welcome to the home page!')
})

module.exports = {
  app: app,
  start: serverStart
}