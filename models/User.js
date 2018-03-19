var mongoose = require("mongoose"),
  Schema = mongoose.Schema,
  passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new Schema({
  first_name: String,
  last_name: String,
  username: String,
  password: String,
  bio: String,
  isLocal: String,
  image: String,
  age: Number,
  city: String
});

UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model("User", UserSchema);
module.exports = User;