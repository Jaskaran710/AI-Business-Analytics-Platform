const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const crypto = require("crypto");
const { Resend } = require("resend");

const User = require("../models/User");

const router = express.Router();
const resend = new Resend(
  process.env.RESEND_API_KEY
);

router.post("/register", async (req, res) => {

  try {

    const { name, email, password } = req.body;

    const existingUser =
      await User.findOne({ email });

    if (existingUser) {

      return res.status(400).json({
        error: "User already exists"
      });

    }

    const hashedPassword =
      await bcrypt.hash(password, 10);

    await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "User registered successfully"
    });

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Registration failed"
    });

  }

});

router.post("/login", async (req, res) => {

  try {

    const { email, password } = req.body;

    console.log("Login Request:", email);

    const user =
      await User.findOne({ email });

    console.log(
      "User Found:",
      !!user
    );

    if (!user) {

      return res.status(400).json({
        error: "Invalid credentials"
      });

    }

    const validPassword =
      await bcrypt.compare(
        password,
        user.password
      );

    console.log(
      "Password Valid:",
      validPassword
    );

    if (!validPassword) {

      return res.status(400).json({
        error: "Invalid credentials"
      });

    }

    console.log(
      "JWT Secret Exists:",
      !!process.env.JWT_SECRET
    );

    const token = jwt.sign(
      {
        userId: user._id
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d"
      }
    );

    console.log(
      "Token Generated"
    );

    res.json({

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email
      }

    });

  } catch (error) {

    console.error(
      "LOGIN ERROR:",
      error
    );

    res.status(500).json({
      error: "Login failed"
    });

  }

});

module.exports = router;
