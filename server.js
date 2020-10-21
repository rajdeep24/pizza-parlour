//Dependencies
const express = require("express");
const app = express();
const mongoose = require("mongoose");

//PORT
const PORT = process.env.PORT || 3000;

//MIDDLEWARE
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//MONGOOSE CONNECTION
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/pizza-parlour", {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
	useFindAndModify: false,
});

//MONGOOSE CONNECTION CONFIRMATION and ERROR HANDLING

const connection = mongoose.connection;

connection.on("connected", () => {
	console.log("Mongoose successfully connected.");
});

connection.on("error", (err) => {
	console.log("Mongoose connection error: ", err);
});

//ROUTES
app.get("/api/config", (req, res) => {
	res.json({
		success: true,
	});
});

//LISTENER
app.listen(PORT, () => {
	console.log(`Server is running on http://localhost:${PORT}`);
});
