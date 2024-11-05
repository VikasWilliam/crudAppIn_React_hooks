require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const workrouteRoutes = require("./routes/workout");

//express app
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());  // This line is necessary for accessing req.body

//middleware
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});
//routes
app.use("/api/workouts", workrouteRoutes);

//connect to DB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    //listen for request
    app.listen(process.env.PORT, () => {
      console.log("Connect to DB & Listening to", process.env.PORT);
    });
  })
  .catch((err) => {
    console.log(err);
  });
