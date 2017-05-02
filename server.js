var express = require('express');

// Create our app
var app = express();
const PORT = process.env.PORT || 3000;

app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto']==='https'){
    console.log('https://' +  req.get('Host') + req.url);
    res.redirect('https://' +  req.get('Host') + req.url);
  }
  else{
    next();
  }

});

app.use(express.static('public'));



app.listen(PORT,function(){
  console.log('Express server is up on port ' + PORT);
});
