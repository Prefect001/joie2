let express = require('express');

let app = express();

app.use(express.static(__dirname + '/dist/Joie2'));

app.get('/*', (req, resp)=>{
    resp.sendFile(__dirname+'/dist/Joie2/index.html');

});

app.listen(process.env.PORT || 8080);