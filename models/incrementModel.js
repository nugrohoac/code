var mongoose=require('mongoose'),
	Schema=mongoose.Schema,
	autoIncrement=require('mongoose-auto-increment');

var connection = mongoose.createConnection("mongodb://localhost/PortalHarga");

autoIncrement.initialize(connection);

var bookModel = new Schema({
	name:String,
	title:String
});

bookModel.plugin(autoIncrement.plugin, { model: 'buku', field: 'bookId', startAt:1 });

module.exports=mongoose.model("buku",bookModel);