var express = require('express');
var app=express();
var loginRouter=express.Router();
var loginController=require('./../controllers/loginController');

//buat login
loginRouter.route('/login')
  .post(loginController.login);

module.exports=loginRouter;