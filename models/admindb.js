const mongoose = require("mongoose");

const adminschema = mongoose.Schema({
  username: {
    type: String,
    required: [true],
  },
  email: {
    type: String,
    required: [true],
  },
  password: {
    type: String,
    required: [true],
  },
});

const model = mongoose.model("admins", adminschema);

module.exports = model;
