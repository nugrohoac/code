var express=require('express');
var app=express();
var secureRoute=express.Router();
var secureController=require('./../controllers/secureController');

secureRoute.route('/secure')
    .post(secureController.secure);

module.exports=secureRoute;