const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TextSchema = new Schema({
  title: String,
  lang: String,
  author: String,
  body: String,
  origLang: Boolean,
  textRef_id: String,
  _user: { type: Schema.Types.ObjectId, ref: 'User' }
});

module.exports = mongoose.model('Text', TextSchema);
