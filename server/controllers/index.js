var models = require('../models');
var bluebird = require('bluebird');
 
module.exports = {
  messages: {
    get: function (req, res) { // a function which handles a get request for all messages
      models.messages.get(function(result) {
        //console.log(result);
        res.send(JSON.stringify({ results: result}));
      });
    },

//insert into database, get the values from the json object in the request.
    post: function (req, res) { // a function which handles posting a message to the database
      console.log('test');
      console.log('request body in controllers: ', req.body);
      var callback = function(result){
        console.log('Messages added');
        res.send('Messages added to database');
        console.log('result: ', result);
      };
      models.messages.post(req.body, callback);
    }
  },
  users: {
    // Ditto as above
    get: function (req, res) {},
    post: function (req, res) {
      console.log(req.body.username);
      //var username = req.username;
      var callback = function(result) {
        res.send('User added to database with ID: ' + result.id);
      }  
      models.users.post(req.body.username, callback);

    }

  }
};

