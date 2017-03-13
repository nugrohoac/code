var mongoose=require('mongoose'),
	Schema=mongoose.Schema,
	autoIncrement=require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/PortalHarga");

autoIncrement.initialize(connection);

var userModel=new Schema({
  name:{type:String, unique:true},
  username:String,
  password:String,
  email:String
});

userModel.plugin(autoIncrement.plugin,{model:'users', field:'userId', startAt:1});

module.exports=mongoose.model("users",userModel);
	