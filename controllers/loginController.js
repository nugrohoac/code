var users = require('./../models/userModel');
/*Nanti di sini di tambahin dari yang masyarakat*/
var config=require('./../config');
var jwt = require('jsonwebtoken');
var crypto = require('crypto');

var login = function(req,res){
	users.findOne({username:req.body.username}, function(err,user){
		if(user){
			if(user.password==crypto.createHash('md5').update(req.body.password,'ut-8').digest('hex')){
				var token =jwt.sign(user,config.secretKey,{
					expiresIn:60*60/*buat 1 jam dulu*/
				});
				res.json({
					user,
					token:token
				})
			}else{
				res.json({"message":"password salah"});
			}
		}else{
			res.json({"message":"user not found"});
		}
	});
};

module.exports={
	login:login
}