const mongoose = require("momgoose");

//create schema
const useSchema = mongoose.schema({
  fname: {
    type: String,
    required: true,
  },
  imagpath: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
  },
});

const users = new mongoose.modal("users", useSchema);
module.exports = users;
