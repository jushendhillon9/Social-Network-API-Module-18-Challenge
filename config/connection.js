const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/socialNetworkApiDB") //input the database name after the last /

module.exports = mongoose.connection;