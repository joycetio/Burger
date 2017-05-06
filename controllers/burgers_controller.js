var express = require("express"); 
var router = express.Router(); 
var burger = require("../models/burger.js"); 

//create all our routes and set up logic within those routes where required. 
router.get('/', function(req, res) {
	burger.selectAll(function(data) {
		var handlebarsObj = {
			burgers: data
		}; 
		console.log("handlebarsObj: ", handlebarsObj); 
		res.render("index", handlebarsObj);
	});
}); 

router.post("/", function(req, res) {
	burger.insertOne(req.body.burgerUserInput, function() {
		res.redirect("/");
	});
});

router.put("/:ID", function(req, res) {
	var condition = "ID = " + req.params.ID; 

	console.log("condition: ", condition); 

	burger.updateOne({
		DEVOURED: req.body.DEVOURED
	}, condition, function() {
		res.redirect("/");
	});
}); 

//exports for server.js
module.exports = router; 