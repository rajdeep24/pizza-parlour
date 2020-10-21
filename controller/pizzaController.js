const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/api/pizza", (req, res) => {
	db.Pizza.find({})
		.then((foundPizzas) => {
			res.json(foundPizzas);
		})
		.catch((err) => {
			console.log(err);
			res.json({
				error: true,
				data: null,
				message: "Failed to retrieve Pizzas.",
			});
		});
});

router.post("/api/pizza", (req, res) => {
	db.Pizza.create(req.body)
		.then((newPizza) => {
			res.json(newPizza);
		})
		.catch((err) => {
			console.log(err);
			res.json({
				error: true,
				data: null,
				message: "Failed to create new Pizza.",
			});
		});
});
