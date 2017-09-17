let express = require ('express');
let bodyParser = require ('body-parser');
let app = express();

// will likely move this to controller
// let db = require("./models");

// access controllers
let controllers = require("./controllers");

// use body parser
app.use(bodyParser.urlencoded({ extended: true }));

// Prevent CORS errors
app.use(function (req, res, next) {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', 'true')
  res.setHeader('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT,DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers')

  // Remove caching
  res.setHeader('Cache-Control', 'no-cache')
  next()
})

app.get("/api", controllers.api.index);

// USER ROUTES
app.get("/users", controllers.users.index);
app.post("/users", controllers.users.create);
app.get("/users/:userId", controllers.users.show);
app.delete("/users/:userId", controllers.users.destroy);
app.put("/users/:userId", controllers.users.update);

// TEXT ROUTES
// INDEX OF ALL TEXTS
app.get("/texts", controllers.texts.index);
// GET TEXTS BY USER
app.get("/users/:userId/texts", controllers.texts.userIndex);
// CREATE TEXT FOR A USER
app.post("/texts", controllers.texts.create);
// SHOW A TEXT FOR A USER
app.get("/texts/:textId", controllers.texts.show);
// DELETE A TEXT FOR A USER
app.delete("/texts/:textId", controllers.texts.destroy);
// UPDATE A TEXT FOR A USER
app.put("/texts/:textId", controllers.texts.update);
// GET ASSOCIATED TRANSLATION TEXTS
app.get("/textgroup/:textRefId", controllers.texts.textGroup);


app.listen(process.env.PORT || 3001, function(){
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
