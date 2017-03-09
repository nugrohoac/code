//config dependensi
var express=require('express');
var config=require('./config');
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());
var userRouter=require('./routes/userRouter');

//database
var mongoose=require('mongoose');
mongoose.connect(config.connect);

app.listen(3000,function(){
  console.log("running on port 3000");
});

app.use('/user',userRouter);
