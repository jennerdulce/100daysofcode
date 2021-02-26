'use strict'

module.exports = (req, res, next) => {
  console.log('PATH: ', req.path)
  console.log('METHOD: ', req.method)
  next();
}