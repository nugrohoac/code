var express = require('express');
var app=express();
var userController=require('./../controllers/userController');
var userRouter=express.Router();

userRouter.route('/all')
  .get(userController.getAllUser);
userRouter.route('/add')
  .post(userController.addUser);
userRouter.route('/find/:userId')
  .get(userController.findUser);
userRouter.route('/update')
  .post(userController.updateUser);
userRouter.route('/delete/:userId')
  .get(userController.deleteUser);

module.exports=userRouter;
