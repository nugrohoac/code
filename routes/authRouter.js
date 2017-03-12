var express=require('express');
var app=express();
var aC=require('./../controllers/authController');
var aR=express.Router();

/*var userController=require('./../controllers/userController');
var userRouter=express.Router();

userRouter.route('/all')
  .get(userController.getAllUser);*/

aR.route('/authUser')
  .get(aC.auth);


module.exports=aR;