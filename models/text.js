let mongoose = require("mongoose");
let Schema = mongoose.Schema;

module.exports = mongoose.model('Text', new Schema({
    title: String,
    lang: String,
    author: String,
    body: String,
    origLang: Boolean,
    textRef_id: {type: Schema.Types.ObjectId, ref: "Text"},
    _user: {type: Schema.Types.ObjectId, ref: "User"}
  })
);
