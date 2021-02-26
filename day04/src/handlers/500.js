'use strict';

module.exports = (err, req, res, next) => {

  const error = err.message ? err.message : err;
  
  res.status(500).json({
    err: 500,
    route: req.path,
    query: req.query,
    body: req.body,
    message: `SERVER ERROR ${error}`
  })
}