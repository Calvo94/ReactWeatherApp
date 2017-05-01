var express = require('express');

// Create our app
var app = express();
const PORT = process.env.port || 3000;

app.use(function(req,res,next){
  if(req.headers['X-Forwarded-Proto']!=='https'){
    console.log("dkhel");
    res.redirect('http://' + req.hostname + req.url);
  }
  else{
    console.log("madkhelsh");
      next();
  }

});

app.use(express.static('public'));



app.listen(PORT,function(){
  console.log('Express server is up on port ' + PORT);
});
