let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/joie2'));

app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname+'/dist/joie2/index.html');

});

app.listen(process.env.PORT || 8080);