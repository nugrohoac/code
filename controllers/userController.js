var users=require('./../models/userModel');
var crypto = require('crypto');
var config=require('./../config');
var jwt = require('jsonwebtoken');

var getAllUser=function(req,res){
	var token = req.body.token || req.headers.token;
	if(!token){
		res.json({"status":"400","message":"token tidak ada"});
	}else{
		var token = req.body.token || req.headers.token;
		jwt.verify(token,config.secretKey,function(err,decode){
			if(err){
				res.status(500).send("Invalid token");
			}else{
				users.find(function(err,allUser){
					if(err){
						res.status(500);
						res.send("Internal server error");
						res.status(200);
					}else{
						res.send(allUser);
					}
				});
			}
		});
	}
};

var addUser=function(req,res){
	var newUser=new users(req.body);
  if(req.body.name=="" || req.body.username=="" || req.body.password=="" || req.body.email==""){
    res.json({"status":"400","message":"UnClompetely"});
  }else{
	  users.findOne({username:req.body.username},function(err,user){
		  if(user){
			  res.json({"message":"username sudah ada"});
		  }else{
			  newUser.password = crypto.createHash('md5').update(req.body.password, 'ut-8').digest('hex') ;
			  newUser.save(function(err){
				  if(err){
					console.log(newUser);
        			res.json({"status":"404","message":"can't save"})
				  }else {
					  var token = jwt.sign(newUser,config.secretKey,{
						  expiresIn:60*60
					  })
					  res.status(201);
					  res.json({
						  newUser,
						  token:token
					  })
				  }
			  });
		  }
	  });
  }
};

var updateUser=function(req,res){
	var token = req.body.token || req.headers.token;
	if(!token){
		res.json({"status":"400","message":"token tidak ada"});
	}
	else{
		jwt.verify(token,config.secretKey,function(err,decode){
			if(err){
				res.status(500).send("Invalid token");
			}else{
				users.findOne({userId:req.body.userId},function(err,user){
					if(!user){
						res.json({"status":"404","message":"user not founded"})
					}else {
						user.name=req.body.name;
						user.username=req.body.username;
						user.password=crypto.createHash('md5').update(req.body.password, 'ut-8').digest('hex');
						user.email=req.body.email;
						user.save(function(err){
							if(err){
								res.json({"status":"404","message":"failed updateUser"});
							}else {
								res.status(500);
								res.send(user);
							}
						});
					}
				});
			}
		})
	}
};

var deleteUser=function(req,res){
	var token = req.body.token || req.headers.token;
	if(!token){
		res.json({"status":"400","message":"token tidak ada"});
	}else{
		jwt.verify(token,config.secretKey,function(err,decode){
			if(err){
				res.status(500).send("Invalid token");
			}else{
				users.findOne({userId:req.params.userId},function(err,user){
				console.log(req.params.userId);
					if(!user){
				  		res.json({"satus":"Not Founded User"});
					}else {
						user.remove(function(err){
							if(err){
					  			res.json({"status":"404","message":"can't deleteUser"});
							}else {
					  			res.json({"message":"success delete user"});
							}
						});
					}
				});
			}
		});
	}
};

var findUser=function(req,res){
	var token = req.body.token || req.headers.token;
	if(!token){
		res.json({"status":"400","message":"token tidak ada"});
	}else{
		jwt.verify(token,config.secretKey,function(err,decode){
			if(err){
				res.status(500).send("Invalid token");
			}else{
				users.findOne({userId:req.params.userId},function(err,user){
					console.log(req.params.userId);
					if(!user){
						res.json({"message":"can't find user"});
					}else {
						res.status(500);
			  			res.send(user);
					}
				});
			}
		});
	}
};

module.exports={
  getAllUser:getAllUser,
  addUser:addUser,
  updateUser:updateUser,
  deleteUser:deleteUser,
  findUser:findUser
};
