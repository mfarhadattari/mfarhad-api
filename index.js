const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
const port = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI;

// middleware
app.use(cors());
app.use(express.json());

(async function run() {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database is Connected!");
  } catch (error) {
    console.error(error);
  }
})();

app.get("/", (req, res) => {
  res.send("MFARHAD API is running!");
});

app.listen(port, () => {
  console.log(`[MFARHAD API]: server is running on port ${port}`);
});
