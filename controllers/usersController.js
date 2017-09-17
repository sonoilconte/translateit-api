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
  db.User.findOne({_id: req.params.userId}, function(err, user){
    if (err){
      console.log("ERROR FINDING USER", err);
    }
    console.log("FINDING USER ", user);
    res.json(user);
  });

}

function destroy(req, res){
  db.User.findOneAndRemove({_id: req.params.userId}, function(err, user){
    if (err){
      console.log("ERROR FINDING AND REMOVING USER", err);
    }
    res.json(user);
  });
}

function update(req, res){
  db.User.findOne({_id: req.params.userId}, function(err, user){
    if (err){
      console.log("ERROR FINDING USER TO UPDATE", err);
    }
    user.username = req.body.username;
    user.password = req.body.password;
    user.save(function(err, user){
      if(err){
        console.log("ERROR SAVING UPDATED USER", err)
      }
      res.json(user);
    });
  });
}

module.exports = {
  index: index,
  create: create,
  show: show,
  destroy: destroy,
  update: update
};
