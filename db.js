const mongoose = require("mongoose");
require("dotenv").config();
mongoose.connect(
  process.env.MONGO,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, data) => {
    if (err) console.log("failed");
    console.log("ok");
  }
);
