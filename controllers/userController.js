var users=require('./../models/userModel');

var getAllUser=function(req,res){
  users.find(function(err,allUser){
    if(err){
      res.status(500);
      res.send("Internal server error");
      res.status(200);
    }else{
      res.send(allUser);
    }
  });
};

var addUser=function(req,res){
  var newUser=new users(req.body);
  if(req.body.name=="" || req.body.username=="" || req.body.password=="" || req.body.email==""){
    res.json({"status":"400","message":"UnClompetely"});
  }else{
    newUser.save(function(err){
      if(err){
        res.json({"status":"404","message":"can't save"})
      }else {
        res.status(201);
        res.send(newUser);
      }
    });
  }
};

module.exports={
  getAllUser:getAllUser,
  addUser:addUser
};
