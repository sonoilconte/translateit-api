let db = require("../models")

function index(req, res){
  db.User.find({}, function(err, users){
    if (err){
      console.log("ERROR FINDING USERS", err);
    }
    console.log("GETTING ALL USERS")
    res.json(users);
  });
}

function create(req, res){
  db.User.create(req.body, function(err, user){
    if (err){
      console.log("ERROR CREATING USER", err);
    }
    console.log("req.body is ", req.body)
    console.log("CREATED USER", user);
    res.json(user);
  });
}

function show(req, res){
  res.json("hello from show a user")

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
