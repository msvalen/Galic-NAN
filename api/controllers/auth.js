const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");

const User = require("../models/Users");

router.post("/register", async (req, res) => {
  try {
    const salt = await bcrypt.genSalt();
    const hashed = await bcrypt.hash(req.body.password, salt);
    await User.create({ ...req.body, password: hashed });
    res.status(201).json({ msg: "User created" });
  } catch (err) {
    res.status(500).json({ err });
  }
});
