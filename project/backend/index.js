const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  console.log("API is running 1...");
  res.send("API is running successfully!");
});
const PORT = process.env.PORT || 5100;
app.listen(5100, console.log("Server is running ..."));
