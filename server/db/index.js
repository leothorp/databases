var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to. connect with the user "root", no password,
// and to the database "chat"
var queryDatabase = function(queryString, queryArgs, callback) {
  var connection = mysql.createConnection({
    user: "",
    password: "",
    database: "chat"
  });
  connection.connect();
  connection.query(queryString, queryArgs, function(err, results) {
    if (err) {
      console.log(err);
    } else {
      console.log('successful query!');
      callback(results);
    }
  });
};

module.exports.queryDatabase = queryDatabase;