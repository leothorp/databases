var db = require('../db');




module.exports = {
  messages: {
    get: function (callback) {
      //var queryString = 'SELECT messages.id, messages.messageText, messages.roomName, users.userName FROM messages LEFT OUTER JOIN users ON (messages.userId = users.id)';
      var queryString = 'SELECT * FROM messages';
      db.queryDatabase(queryString, [], callback);

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

