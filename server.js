var express = require('express');
var path = require('path');
// var browserify = require('browserify-middleware');
const app = express();
 
// this create a bundle.js in javascript folder and update it each time when we request the page
// app.use('/javascript', browserify('./javascript'));
// to read from js file
// app.use(express.static(path.join(__dirname, 'index')));
// to attach html 
app.get('/', (req, res) => res.sendFile(path.join(__dirname + '/index.html')))

app.listen(3000, console.log('app is running'));