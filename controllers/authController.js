var jwt = require('jsonwebtoken');
var config=require('./../config');
 
var auth=function(req,res){
	var encrip ="qwerty";
    var user={
        i:"ghghfghfghgfhfg1"
    }
    var token=jwt.sign(user, config.secretKey,{
        expiresIn:4000
    });
    res.json({user,
        succes:true,
        token:token
    })
};

module.exports ={
    auth:auth
};