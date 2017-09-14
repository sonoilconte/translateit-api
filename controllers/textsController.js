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
    if (err){ console.log("ERROR CREATING NEW TEXT FOR USER", err); }
    res.json(text);
  });
}

function show(req, res){

}

function destroy(req, res){

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
