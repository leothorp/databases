var db = require('../db');




module.exports = {
  messages: {
    get: function () {
      // set queryString to selecting table data
        // select all properties 
      // passing that data to our databasequery method


    }, // a function which produces all the messages
    post: function (body, callback) {
      var userId = '(SELECT id FROM users WHERE userName = "'+body.username+'")';
      var queryString = 'INSERT INTO messages (messageText, userId, roomName) VALUES("' + 
        body.message + '",' + userId +',"' + body.roomname +'");';
      
      db.queryDatabase(queryString, [], callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, callback) {
      db.queryDatabase('INSERT into users (userName) VALUES("'+ username +'");', [], callback);
    }
  }
};

