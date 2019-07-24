const express = require('express');
const bodyParser = require('body-parser');
const port = 3009;

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); 
app.use(express.static(__dirname + '/public'));

app.listen(port, console.log('listening on port', port));