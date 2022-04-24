const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Schema for Buyer (User)
const BuyerSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	email: {
		type: String,
		required: true,
		unique: true
	},
	password: {
		type: String,
		required: true
	},
	contact_number: {
		type: Number, 
		required: true
	},
	age:{
		type: Number,
		max: [100, "Age should be less than 100"],
		required: true
	},
	batch_name: {
		type: String,
		enum: {values: ['UG1','UG2', 'UG3', 'UG4', 'UG5'], message: 'Batch name should be one of UG1, UG2, UG3, UG4, UG5'},
		required: true
	},
	wallet: {
		type: Number,
		required: true,
		default: 0
	}
});
module.exports = Buyer = mongoose.model("Buyer", BuyerSchema);