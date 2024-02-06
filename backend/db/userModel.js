const mongoose = require("mongoose");

// user schema
const UserSchema = new mongoose.Schema({
  //name field
  name: {
    type: String,
    required: [true, "Please provide the user name!"],
    unique: false,
  },

  // email field
  email: {
    type: String,
    required: [true, "Please provide an Email!"],
    unique: [true, "Email Exist"],
  },

  //   password field
  password: {
    type: String,
    required: [true, "Please provide a password!"],
    unique: false,
  },

  token: {
    type: String,
    unique: false
  }
});

// export UserSchema
module.exports = mongoose.model.Users || mongoose.model("Users", UserSchema);