// const mongoose = require("mongoose");
// const mongoURI = "mongodb+srv://vercel-admin-user:R8FqSPCjPPqTg4Nr@cluster0.a8dkw7k.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

// const connectToMongo = async () => {
//   await mongoose.connect(mongoURI);
//   console.log("Connected to Mongo successfully");
// };

// module.exports = connectToMongo;

rules_version = '2';

service cloud.firestore {
  match /databases/{database}/documents {
    match /{document=**} {
      allow read, write: if false;
    }
  }
}