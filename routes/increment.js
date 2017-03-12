var express = require('express');
var app=express();
var incrementController=require('./../controllers/incrementController');

var incrmentRouter=express.Router();

incrmentRouter.route('/add')
	.post(incrementController.add);

module.exports=incrmentRouter;