let mongoose = require("mongoose");
mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/translateit_test");

module.exports.User = require("./user");
module.exports.Text = require("./text");
