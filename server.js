var express = require('express');

// Create our app
var app = express();
const PORT = process.env.port || 3000;

app.use(function(req,res,next){
  if(req.protocol === 'http'){
    next();
  }
  else{
    res.redirect('https://' + req.hostname + req.url);
  }
});

app.use(express.static('public'));



app.listen(PORT,function(){
  console.log('Express server is up on port ' + PORT);
});
