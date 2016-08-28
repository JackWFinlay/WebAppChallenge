// server.js
//===================================
// Dependencies
const express = require('express');
const path    = require('path');
// / Dependencies
//===================================


app = express();
app.listen(3000, function() {
    console.log('App listening on port 3000!');
});

app.use(express.static(path.join(__dirname, '/public')));
app.use('/scripts', express.static(__dirname + '/node_modules/'));

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/public/index.html');
});
