var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var Reviews = new Schema({
	stars: Number,
	body: String,
	author: String
});



var GemSchema = new Schema({
	name:        {
		type:     String,
		required: true,
		unique:   true
	},
	price:       {
		type:     Number,
		required: true,
	},
	description: {
		type:     String,
		required: true
	},
	canPurchase: Boolean,
	soldOut:     Boolean,
	images:      Array,
	reviews:     [Reviews]
});

module.exports = mongoose.model('Gems', GemSchema);
