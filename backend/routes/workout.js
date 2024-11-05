const express = require("express");
const router = express.Router();
const Workout= require("../models/workoutModel");

//get all workouts
router.get("/", (req, res) => {
  res.json({ msg: "GET all workouts" });
});

//get a single workouts
router.get("/:id", (req, res) => {
  res.json({ msg: "GET a single workout" });
});

//Post a new workout
router.post("/", async (req, res) => {
  const { title, reps, load } = req.body;
  try{
    const workout= await Workout.create({title,reps,load})
    res.status(200).json(workout);
  }catch(error){
    res.status(400).json({error: error.message})
  }
});

//del a workout
router.delete("/:id", (req, res) => {
  res.json({ msg: "DELETE a workout" });
});

//update a workout
router.patch("/", (req, res) => {
  res.json({ msg: "UPDATE a new workout a new workout" });
});

module.exports = router;
