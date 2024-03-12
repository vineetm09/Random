const mongoose = require("mongoose");
mongoose.connect("mongodb://127.0.0.1:27017/paytm");

const userSchema = mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  lastName: String,
});

const User = mongoose.model("User", userSchema);

module.exports = {
  User,
};
