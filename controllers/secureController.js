var jwt = require('jsonwebtoken');
var config=require('./../config');

var secure = function(req,res){
  var token =req.body.token || req.headers.token;
	if(token){
		jwt.verify(token,config.secretKey,function(err,decode){
			if(err){
				res.status(500).send("invalid Token");
			}else{
				res.status(400).send("valid Token");
			}
		})
	}else{
		res.send("please send a token")
	}
};

module.exports={
	secure:secure
}