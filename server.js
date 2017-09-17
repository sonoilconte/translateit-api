let express = require ('express');
let bodyParser = require ('body-parser');
let app = express();
let cookieParser = require ('cookie-parser');
let session = require ('express-session');
let passport = require ('passport');
let LocalStrategy = require ('passport-local').Strategy;

// require DB models
let db = require('./models');
let Text = db.Text;
let User = db.User;

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

// middleware for auth
app.use(cookieParser());
app.use(session({
  secret: 'secretkey',
  resave: false,
  saveUnitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

// passport config
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// API description route
app.get("/api", controllers.api.index);

// USER ROUTES
app.get("/users", controllers.users.index);
app.post("/users", controllers.users.create);
app.get("/users/:userId", controllers.users.show);
app.delete("/users/:userId", controllers.users.destroy);
app.put("/users/:userId", controllers.users.update);

// USER AUTH ROUTES
// Sign Up
app.post("/signup", function(req, res){
  console.log(`Signing up ${req.body.username} with pw ${req.body.password}`)
  User.register(new User({ username: req.body.username }), req.body.password,
    function (err, newUser){
      if (err){
        console.log(err);
      }
      passport.authenticate("local")(req, res, function(){
        res.send(newUser);
      });
    }
  );
});

// Log in
app.post("/login", passport.authenticate("local"), function(req, res){
  console.log("Logging in user ", req.user);
  res.send("User is logged in.");
});

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
