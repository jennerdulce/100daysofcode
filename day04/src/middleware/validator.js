'use strict';

module.exports = (req, res, next) => {
  if(!req.query.name){
    // hits errorHandler and is passed in through
    next('ERROR');
  }
  // continues on to the next mw
  // if there are no other mw, will continue with the handler
  next();
}