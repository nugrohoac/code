var jwt = require('jsonwebtoken');
var config=require('./../config');
 
var auth=function(req,res){
    var user={
        username:'test',
        email:'test@test.com'
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