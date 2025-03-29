const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const userRoutes = require("./routes/userRoutes");
const app = express();
dotenv.config();

const connectDB = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Sever connected to DB ...");
  } catch (error) {
    console.log("Server not connected to DB ...", error.message);
  }
};
app.use(express.json());
connectDB();
app.get("/", (req, res) => {
  console.log("API is running 1...");
  res.send("API is running successfully!");
});
app.use("/user", userRoutes);
const PORT = process.env.PORT || 5100;
app.listen(5100, console.log("Server is running ..."));
