const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for Food Item 
const ItemSchema = new Schema({
	shop_id: {
		type: String,
		required: true
	},
	name: {
		type: String,
		required: true
	},
	price: {
		type: Number, 
		required: true
	},
	rating:{
		type: Number,
		// enum: {values: [0, 1, 2, 3, 4, 5]},
		default: 0,
		required: true
	},
	isveg:{
		type: Boolean,
		required: true,
		// default: true
	},
	add_ons: [{
		name: {
			type: String,
		},
		price: {
			type: Number,
		}
	}],
	tags: [{
		type: String,
	}]
	,
});

module.exports = Item = mongoose.model("Item", ItemSchema);