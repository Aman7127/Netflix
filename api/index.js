const express = require("express");
const dotenv = require("dotenv");
const app = express();

dotenv.config();

const mongoose = require("mongoose");
main().catch(err => console.log(err));

async function main() {
  await mongoose.connect(process.env.MONGO_URL);
}
 

app.listen(8080 , ()=> {
    console.log("Server is running");
})