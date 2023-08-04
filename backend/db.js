const mongoose = require("mongoose");
const mongoURI = "mongodb+srv://vercel-admin-user:R8FqSPCjPPqTg4Nr@cluster0.a8dkw7k.mongodb.net/";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("Connected to Mongo successfully");
};

module.exports = connectToMongo;
