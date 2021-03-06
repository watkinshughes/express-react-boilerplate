'use strict';
module.exports = function(router){
  // middleware to use for all requests
  router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "http://localhost:3000");
    // do logging
    console.log('Something is happening.');
    next(); // make sure we go to the next routes and don't stop here
  });


  // test route to make sure everything is working (accessed at GET http://localhost:8080/api)
  router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to our api!' });
  });

  // Routes
  require('./routes/bears.js')(router);
}