const connectToMongo = require("./db");
const express = require("express");
const cors = require('cors') 

connectToMongo();
const app = express();
const port = "https://icloud-notebook-backend.vercel.app";

app.use(cors())

app.use(express.json());

//Available Routes
// app.use("/",(req,res)=>{
//   res.send("hello")
// })
app.use("/api/auth", require("./routes/auth"));
app.use("/api/notes", require("./routes/notes"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
