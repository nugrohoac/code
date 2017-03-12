var buku=require('./../models/incrementModel');

var add=function(req,res){
	var bukuBaru = new buku(req.body);
	console.log(bukuBaru);
	if(req.body.name=="" || req.body.title==""){
		res.json({"message":"tidak lengkap"});
	}else{
		bukuBaru.save(function(err){
			if(err){
				res.json({"message":"ada error"});
			}else{
				res.send(bukuBaru);
			}
		})
	}
};

module.exports={
	add:add
}