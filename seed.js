let db = require("./models");

let userList = [];

userList.push({
  username: "johnsmith",
  email: "johnsmith@gmail.com",
  password: "johnsmithpw"
});

userList.push({
  username: "johndoe",
  email: "johndoe@gmail.com",
  password: "johndoepw"
});

userList.push({
  username: "janedoe",
  email: "janedoe@gmail.com",
  password: "janedoepw"
});

// seed users

db.User.remove({}, function(err, users){
  db.User.create(userList, function(err, users){
    if (err){
      console.log("ERROR CREATING USERS ", err);
    }
    console.log("CREATED", users.length, "USERS: ", users);
    process.exit();
  });
});
