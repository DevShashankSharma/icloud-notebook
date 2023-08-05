const mongoose = require("mongoose");
const mongoURI = "postgresql://admin:6Z9f@2ij2d5k56S@us-east-1.2b68fb6c-9661-42d0-8399-cce21b977b9e.aws.ybdb.io:5433/test case?ssl=true&sslmode=verify-full&sslrootcert=root.crt";

const connectToMongo = async () => {
  await mongoose.connect(mongoURI);
  console.log("Connected to Mongo successfully");
};

module.exports = connectToMongo;
