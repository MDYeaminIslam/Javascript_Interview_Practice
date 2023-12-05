
const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/firstDB"); //build a connections and here firstDB is the name of the database
//creating schema. This is dcument structure
const userSchema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
});

//creating model
module.exports = mongoose.model("User", userSchema); //User is the name of the model and userSchma is the schema. here User is the collection name