/**
 * GroupsController.js
 *
 * @description :: Server-side logic for managing subscriptions
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  hello: function (req, res) {
    res.send("wubalubadubdub!");
  },

  postTest: function (req, res) {
    res.send(req);
  },

  // POST URL: http://localhost:1337/Groups/AddGroup
  addGroup: function (req, res) {
    var data = req.body;
    if(!req.body.ID === undefined|| req.body.name === undefined || req.body.description === undefined) {
     return res.badRequest('No data in body:' + data);
    } else {
      res.created(data);
      var sql = "Insert Into Groups(ID,Name,Description) Values( '" + req.body.ID + "', '" + req.body.name + "', '" + req.body.description + "');";
      Groups.query(sql, [], (err, results) => {
        if (err) { return res.serverError(err); }
      })
    }
  }
};



