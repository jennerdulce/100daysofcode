'use strict';

const data = require('./src/server.js');
const PORT = process.env.PORT || 3000;

data.start(PORT)