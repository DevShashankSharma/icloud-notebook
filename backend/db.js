const mongoose = require("mongoose");
const mongoURI = "mongodb://localhost:27017/icloud-notebook";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("Connected to Mongo successfully");
};

module.exports = connectToMongo;
