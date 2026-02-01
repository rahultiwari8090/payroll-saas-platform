const express = require("express");
const jwt = require("jsonwebtoken");
const router = express.Router();

router.post("/login", (req, res) => {
  const { email, role } = req.body;

  if (!email || !role) {
    return res.status(400).json({ message: "Email and role required" });
  }

  const token = jwt.sign(
    { email, role },
    process.env.JWT_SECRET,
    { expiresIn: "1h" }
  );

  res.status(200).json({ token });
});

module.exports = router;
