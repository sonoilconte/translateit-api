let mongoose = require("mongoose");
let Schema = mongoose.Schema;

let TextSchema = new Schema({
  title: String,
  lang: String,
  author: String,
  body: String,
  origLang?: Boolean,
  textRef_id: String,
  _user: {type: Schema.Types.ObjectId, ref: "User"}
});

let Text = mongoose.model('Text', TextSchema);

module.exports = Text;
