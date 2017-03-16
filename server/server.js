// BASE SETUP
// =============================================================================
'use strict';
// call the packages we need
import express from 'express'; // call express
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

const app        = express(); // define our app using express
const port       = process.env.PORT || 8080; // set our port
const router     = express.Router(); // get an instance of the express Router

// connect to our database
mongoose.connect('mongodb://localhost/myapp');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require('./router/router.js')(router);

// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Magic happens on port ' + port);