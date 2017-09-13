let express = require ('express');
let bodyParser = require ('body-parser');
let app = express();

// will likely move this to controller
// let db = require("./models");

// access controllers
let controllers = require("./controllers");

app.get("/api", controllers.api.index);

app.get("/users", controllers.users.index);
app.get("/user", controllers.users.show)

app.get("/texts", controllers.texts.index);


app.listen(process.env.PORT || 3000, function(){
  console.log("Express server is up and running!");
});


// front end server
// use "public" dir for static files
// app.use(express.static("public"));

// serve index.html from views
// app.get('/', function(req, res){
//   res.sendFile("views/index.html", {root: __dirname});
//   console.log(__dirname);
// });
