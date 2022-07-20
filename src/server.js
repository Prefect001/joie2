//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist/joie2'));

app.get('/', function(req,res) {

    if(req.url === '/') {
      res.sendFile(path.join(__dirname,'/dist/joie2/index.html'));
    }
    else {
      res.sendFile(path.join(__dirname, '/dist/joie2' + req.url))
    }
  
  });
  

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);