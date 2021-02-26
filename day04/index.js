'use strict';

// import module
require('dotenv').config()
const server = require('./src/server.js')
const PORT = process.env.PORT || 3000

// starting the server through index.js
server.start(PORT)