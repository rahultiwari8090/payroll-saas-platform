const express = require("express");
const Employee = require("../models/Employee");
const auth = require("../middleware/authMiddleware");
const role = require("../middleware/roleMiddleware");

const router = express.Router();

// Sync table once
Employee.sync();

// CREATE (HR)
router.post("/", auth, role("HR"), async (req, res) => {
  const employee = await Employee.create(req.body);
  res.status(201).json(employee);
});

// READ ALL (HR)
router.get("/", auth, role("HR"), async (req, res) => {
  const employees = await Employee.findAll();
  res.json(employees);
});

// READ ONE
router.get("/:id", auth, async (req, res) => {
  const employee = await Employee.findByPk(req.params.id);
  res.json(employee);
});

// UPDATE (HR)
router.put("/:id", auth, role("HR"), async (req, res) => {
  await Employee.update(req.body, {
    where: { id: req.params.id }
  });
  res.json({ message: "Employee updated" });
});

// DELETE (HR)
router.delete("/:id", auth, role("HR"), async (req, res) => {
  await Employee.destroy({
    where: { id: req.params.id }
  });
  res.json({ message: "Employee deleted" });
});

module.exports = router;
