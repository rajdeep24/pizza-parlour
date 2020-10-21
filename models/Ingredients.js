const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const IngredientSchema = new Schema({
	name: {
		type: String,
		trim: true,
		required: "Ingredient name is required",
	},
	isVegetarian: {
		type: Boolean,
		required: false,
	},
});

const Ingredient = mongoose.model("Ingredient", IngredientSchema);

module.exports = Ingredient;
