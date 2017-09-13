let mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/translateit_test");

module.exports.User = require("./user");
module.exports.Text = require("./text");
