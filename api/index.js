const express = require("express");
const dotenv = require("dotenv");
const app = express();
const authRoute = require("./routes/auth");

dotenv.config();

const mongoose = require("mongoose");
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL).then(()=>console.log("DB connection successfull"));
}

app.use(express.json());
app.use("/api/auth" , authRoute);

 

app.listen(8080 , ()=> {
    console.log("Server is running");
})