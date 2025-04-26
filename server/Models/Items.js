const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  personal: {
    name: String,
    number: Number,
  },
  email: String,
  password: String,
  id: Number,
});
 
module.exports = mongoose.model("Users", UserSchema);
 
