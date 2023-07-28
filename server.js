const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
require('dotenv').config();
require('./config/database');
const ensureLoggedIn = require('./config/ensureLoggedIn');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(favicon(path.join(__dirname, 'build', 'favicon.ico')));
app.use(express.static(path.join(__dirname, 'build')));
app.use(require('./config/checkToken'));
app.use('/api/users', require('./routes/api/users'));
app.use('/api/events', require('./routes/api/events'))
app.use('/api/events',ensureLoggedIn, require('./routes/api/events'));
// app.use((req, res, next)=>{
//   if (req.headers){
//     console.log(req.headers)
//   }
//   next()
// })

// Put API routes here, before the "catch all" route

// The following "catch all" route (note the *) is necessary
// to return the index.html on all non-AJAX requests
app.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


const port = process.env.PORT || 3001;

app.listen(port, function() {
  console.log(`Express app running on port ${port}`)
});