const express = require("express");
const router = express.Router();
const User = require("../models/User");


// Get all users
router.get("/", async (req, res) => {

  try {
    const users = await User.find();
    res.json({ msg: "data fetched", users });
  } catch (error) {
    console.log(error);
  }
});

// Add a new user

router.post("/add", async (req, res) => {
  const { name, email, phone } = req.body;
  try {
    const newUser = new User({
      name,
      email,
      phone,
    });
    const user = await newUser.save();
    res.json({ msg: "user added", user });
  } catch (error) {
    console.log(error);
  }
});

// Edit a user by id
router.put("/edit/:_id", async (req, res) => {
  const { _id } = req.params;
  try {
    const user = await User.findOneAndUpdate({ _id }, { $set: req.body }, {new: true});
    res.json({ msg: "user edited", user });
  } catch (error) {
    console.log(error);
  }
});

// Delete a user by id

router.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findOneAndDelete({ _id: id });
    res.json({ msg: "user deleted", user });
  } catch (error) {
    console.log(error);
  }
});




module.exports = router;