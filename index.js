const express = require("express");
const mongoose = require("mongoose");
const app = express();

// routes
app.get("/", (req, res) => {
  res.send("Hello DevTodo API");
});

mongoose
  .connect(
    "mongodb+srv://devSylva:Ejike1451@cluster0.7vtfn.mongodb.net/?retryWrites=true&w=majority"
  )
  .then(() => {
    console.log("connected to mongoose");
    app.listen(3000, () => {
      console.log("DevTodo API is running on port 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
