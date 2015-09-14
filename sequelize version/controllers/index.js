//var models = require('../models');
var bluebird = require('bluebird');
var seq = require('../db');
var Message = seq.Message;
var User = seq.User;

module.exports = {
  messages: {
    get: function(req, res) {
      Message.findAll({include: [User]})
        .complete(function(err, results) {
          res.send(JSON.stringify(results)); 
        });
    },

    post: function(req, res) {
      var body = req.body;
      User.findOrCreate({username: body.username})
        .complete(function(err, user) {
          var queryArgs = {text: body.text, userId: user.id, roomname: body.roomname}; 
          Message.create(queryArgs)
            .complete(function(err, results) {
              res.sendStatus(201);
            });
        });  
    }
  },

  users: {
    get: function(req, res) {
      User.findAll()
        .complete(function(err, results) {
          res.send(JSON.stringify(results));
        });
    },

    post: function(req, res) {
      var body = req.body;
      User.create({username: body.username})
        .complete(function(err, user) {
          res.sendStatus(201);
        });
    }
  }
};


