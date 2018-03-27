/**
 * UsersController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  hello: function (req, res) {
    res.send("I adore pets!");
  },

  bye: (req,res) => {
    res.send('bye!');
  },
  myGoAction: (req,res) => {
    res.send('MyGoAction function ran!');
  },
  addUser: (req,res) => {

  }
}

