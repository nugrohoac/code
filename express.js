//config dependensi
var express=require('express');
var config=require('./config');
var app=express();

//body-parser
var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

//database
var mongoose=require('mongoose');
mongoose.connect(config.connect);

//jwt
var jwt = require('jsonwebtoken');

//router
var userRouter=require('./routes/userRouter');
var auth=require('./routes/authRouter');
var secureRouter=require('./routes/secureRouter');
var increment=require('./routes/increment');

app.listen(5000,function(){
  console.log("running on port 5000");
});

app.use('/user',userRouter);


app.use('/auth',auth);
app.use('/secure',secureRouter);

app.use('/incre',increment);