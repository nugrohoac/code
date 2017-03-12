var mongoose=require('mongoose');
var Schema=mongoose.Schema;

var userModel=new Schema({
  idUser:Number,
  name:String,
  username:String,
  password:String,
  email:String
});

module.exports=mongoose.model("users",userModel);
