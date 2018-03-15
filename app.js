var express = require('express');
var app = express();

app.get('/',function(req,res) {
  res.send("Hello World, how's it going? Test pi hot boi");
});

app.listen(4000);
