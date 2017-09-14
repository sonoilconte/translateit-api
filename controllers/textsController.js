let db = require("../models")

function index(req, res){
  db.Text.find({}, function(err, texts){
    if (err){ console.log("ERROR FINDING ALL TEXTS", err); }
    console.log("GETTING ALL TEXTS")
    res.json(texts);
  });
}

function userIndex(req, res){
  db.Text.find({ _user: req.params.userId }, function(err, texts){
    if (err){ console.log("ERROR FINDING ALL TEXTS BY USER", err); }
    console.log("GETTING ALL TEXTS BY USER");
    res.json(texts);
  });
}

function create(req, res){
  db.Text.create(req.body, function(err, text){
    if (err){ console.log("ERROR CREATING NEW TEXT", err); }
    console.log("CREATING NEW TEXT", text);
    res.json(text);
  });
}

function show(req, res){
  db.Text.findOne({ _id: req.params.textId }, function(err, text){
    if (err){ console.log("ERROR FINDING TEXT", err); }
    console.log("SHOWING ONE TEXT", text);
    res.json(text);
  });
}

function destroy(req, res){
  db.Text.findOneAndRemove({ _id: req.params.textId }, function(err, text){
    if (err){ console.log("ERROR FINDING AND REMOVING TEXT", err); }
    console.log("DELETING ONE TEXT", text);
    res.json(text);
  });
}

function update(req, res){

}

module.exports = {
  index: index,
  userIndex: userIndex,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
