'use strict';
const Bear       = require('../../models/bear');

module.exports = function(router){
  router.route('/bears')
  // create a bear (accessed at POST http://localhost:8080/api/bears)
  .post(function(req, res) {
    var bear = new Bear();      // create a new instance of the Bear model
    bear.name = req.body.name;  // set the bears name (comes from the request)

    // save the bear and check for errors
    bear.save(function(err) {
      if (err)
        res.send(err);
      res.json({ message: 'Bear created!' });
    });
  })
  // get all the bears (accessed at GET http://localhost:8080/api/bears)
  .get(function(req, res) {
    Bear.find(function(err, bears) {
      if (err)
        res.send(err);
      res.json(bears);
    });
  });

  router.route('/bears/:bear_id')
    // get the bear with that id (accessed at GET http://localhost:8080/api/bears/:bear_id)
    .get(function(req, res) {
      Bear.findById(req.params.bear_id, function(err, bear) {
        if (err)
          res.send(err);
          res.json(bear);
      });
    })

    .put(function(req, res) {
      // use our bear model to find the bear we want
      Bear.findById(req.params.bear_id, function(err, bear) {
        if (err)
        res.send(err);

        bear.name = req.body.name;  // update the bears info

        // save the bear
        bear.save(function(err) {
          if (err)
          res.send(err);

        res.json({ message: 'Bear updated!' });
      });
    });
  })
  .delete(function(req, res) {
    Bear.remove({
      _id: req.params.bear_id
    }, function(err, bear) {
      if (err)
      res.send(err);

      res.json({ message: 'Successfully deleted' });
    });
  });
}