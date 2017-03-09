var express=require('express');
var app=express();
var userController=require('./../controllers/userController');
var userRouter=express.Router();

userRouter.route('/all')
  .get(userController.getAllUser);
userRouter.route('/addUser')
  .post(userController.addUser);

module.exports=userRouter;
