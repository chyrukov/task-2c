var express = require('express')
  , cors = require('cors')
  , app = express();

app.use(cors());

function canonize(url){
    const re = new RegExp('@?(https?:)?(\/\/)?(www?\.)?((vk|twitter|telegram|github)[^\/]*\/)?([a-zA-Z0-9]*)');
    const username = url.match(re);
    return username;
}

app.get('/', function(req, res, next){
    const param = req.query.username;
    const username = canonize(param);
    res.end(`@${username[6]}`);
    //console.log(username);
});

app.listen(3000, function(){
  console.log('CORS-enabled web server listening on port 3000');
});
