var db = require('../db');

module.exports = {
  messages: {
    get: function (callback) {
      //var queryString = 'SELECT messages.id, 
      var queryString = 'SELECT messages.text, messages.roomname, users.username FROM messages LEFT JOIN users ON (messages.userId = users.id)';
      //var queryString = 'SELECT * FROM messages';
      db.queryDatabase(queryString, [], callback);

    }, // a function which produces all the messages
    post: function (body, callback) {
      console.log('body: ', body);
      module.exports.users.post(body.username, function() { console.log('user added!'); });
      var userId = '(SELECT id FROM users WHERE username = "'+body.username+'")';
      var queryString = 'INSERT INTO messages (text, userId, roomname) VALUES("' + 
        body.text + '",' + userId +',"' + body.roomname +'");';
      db.queryDatabase(queryString, [], callback);
    } // a function which can be used to insert a message into the database
  },

  users: {
    // Ditto as above.
    get: function () {},
    post: function (username, callback) {
      db.queryDatabase('INSERT into users (username) VALUES("'+ username +'");', [], callback);
    }
  }
};

