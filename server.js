
var express = require('express')
var path = require('path');
var app = express()
var port = process.env.PORT || 8080;

app.use('/asset', express.static(__dirname + '/asset'));
app.use('/styles', express.static(__dirname + '/styles'));
app.use('/node_modules', express.static(__dirname + '/node_modules'));
app.use('/javascripts', express.static(__dirname + '/javascripts'));

console.log(__dirname)
app.get('/', (req, res) => res.sendFile(__dirname + '/index.html'))

app.listen(port, () => console.log(`app listening on port ${port}!`));