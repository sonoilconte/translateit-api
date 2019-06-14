let db = require("../models")

function index(req, res) {
  db.Text.find({}, function(err, texts) {
    if (err){ console.log("ERROR FINDING ALL TEXTS", err); }
    console.log("Getting all texts (from all users) in the database")
    res.json({ texts: texts });
  });
}

function userIndex(req, res) {
  db.Text.find({ _user: req.params.userId }, function(err, texts) {
    if (err){ console.log("ERROR FINDING ALL TEXTS BY USER", err); }
    console.log("GETTING ALL TEXTS BY USER");
    res.json(texts);
  });
}

function create(req, res) {
  db.Text.create(req.body, function(err, text) {
    if (err){ console.log("ERROR CREATING NEW TEXT", err); }
    console.log("CREATING NEW TEXT", text);
    res.json(text);
  });
}

function show(req, res) {
  db.Text.findOne({ _id: req.params.textId }, function(err, text) {
    if (err){ console.log("ERROR FINDING TEXT", err); }
    console.log("SHOWING ONE TEXT", text);
    res.json(text);
  });
}

function destroy(req, res) {
  db.Text.findOneAndRemove({ _id: req.params.textId }, function(err, text) {
    if (err){ console.log("ERROR FINDING AND REMOVING TEXT", err); }
    console.log("DELETING ONE TEXT", text);
    res.json(text);
  });
}

function update(req, res) {
  db.Text.findOne({ _id: req.params.textId }, function(err, text) {
    if (err){ console.log("ERROR FINDING TEXT TO UPDATE", err); }
    console.log("UPDATING TEXT", text);
    text.title = req.body.title;
    text.author = req.body.author;
    text.lang = req.body.lang;
    text.body = req.body.body;
    text.origLang = req.body.origLang;
    text.textRef_id = req.body.textRef_id;
    text._user = req.body._user;
    text.save(function(err, text) {
      if (err){ console.log("ERROR SAVING TEXT TO UPDATE", err); }
      console.log("SAVING UPDATED TEXT", text);
      res.json(text);
    });
  });
}

function textGroup(req, res) {
  db.Text.find({ textRef_id: req.params.textRefId }, function(err, texts) {
    if (err){ console.log("ERROR FINDING ASSOCIATED TRANSLATION TEXTS", err); }
    console.log("FINDING ASSOCIATED TRANSLATION TEXTS");
    res.json(texts);
  });
}

module.exports = {
  index: index,
  userIndex: userIndex,
  create: create,
  show: show,
  destroy: destroy,
  update: update,
  textGroup: textGroup
};
