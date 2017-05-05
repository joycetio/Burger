var connection = require('../config/connection.js'); 

//helper function for SQL syntax
function objToSql(ob) {
  var arr = [];

  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }

  return arr.toString();
}


var orm = {
	selectAll: function(tableInput, callBack) {
		var queryString = "SELECT * FROM" + tableInput + ";"; 

		connection.query(queryString, function(err, result) {
			if (err) { throw err; }

			callBack(result);
		});
	}, 

	insertOne: function(table, value, callBack) {
		var queryString = 'INSERT INTO' + table; 

		queryString += '(BURGER_NAME, DEVOURED) VALUES ("'; 
		queryString += value; 
		queryString += '", false);'; 

		connection.query(queryString, function(err, result) {
			if (err) throw err; 

			callBack(result);
		});
	}, 

	updateOne: function(table, column, condition, callBack) {
		var queryString = 'UPDATE ' + table; 

		queryString += "SET "; 
		queryString += objToSql(column); 
		queryString += " WHERE ";
		queryString += condition; 

		connection.query(queryString, function(err, result) {
			if (err) throw err; 

			callBack(result); 
		});
	}
}; 

module.exports = orm; 
