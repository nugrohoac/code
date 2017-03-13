var express=require('express');
var app=express();

var bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var data = "bismillah lulus";
var sama = "bismillah lulus";
var sama2 = "bismillah lulus";
var crypto = require('crypto');

var hasil = crypto.createHash('md5').update(data, 'ut-8').digest('hex');

var hasil2 = crypto.createHash('md5').update('md5', 'ut-8').digest('hex');
var hasil3 = crypto.createHash('md5').update(sama2, 'ut-8').digest('hex');


console.log(hasil);
console.log(hasil2);
console.log(hasil3);


	var password = "asd lulus";
	var encrip = crypto.createHash('md5').update(password, 'ut-8').digest('hex');
	
	if(hasil==encrip){
		console.log('cocok');
	}else{
		console.log('beda');
	}
