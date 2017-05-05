//import orm to create functions that will interact with the database
var orm = require("../config/orm.js");

var burger = {
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	}, 
	insertOne: function(value, cb) {
		orm.insertOne("burgers", value, function(res) {
			cb(res); 
		});
	}, 
	updateOne: function(column, condition, cb) {
		orm.updateOne("burgers", column, condition, function(res) {
			cb(res);
		});
	}
};

//exports the db for controller
module.exports = burger;

