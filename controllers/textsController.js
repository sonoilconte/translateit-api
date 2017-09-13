// let db = require("../models")

function index(req, res){
  // db.User.find({}, function(err, users){
  //   if (err){
  //     console.log("ERROR", err);
  //   }
  //   console.log("GETTING ALL USERS")
  //   res.json(users);
  // });
  res.json("hello from textsController")
}

function create(req, res){

}

function show(req, res){

}

function destroy(req, res){

}

function update(req, res){

}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
