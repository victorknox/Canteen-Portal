const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for Food Item 
const ItemSchema = new Schema({
	// shop_id: {
	// 	type: String,
	// 	required: true
	// },
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

// Schema for Vendor (User)
const VendorSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	password: {
		type: String,
		required: true
	},
	shop_name: {	
		type: String,
		required: true,
		unique: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	contact_number: {
		type: Number,
		required: true
	},
	canteen_opening_time: {
		type: String,
		required: true
	},
	canteen_closing_time: {
		type: String,
		required: true
	},
	items: [{
		type: ItemSchema,
		required: false
	}],
});

module.exports = Vendor = mongoose.model("Vendor", VendorSchema);