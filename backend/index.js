require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();
const { connectDB } = require("./config/db");

// DB connect
connectDB();

// ✅ MIDDLEWARES (listen se pehle)
app.use(cors());
app.use(express.json());

// routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/employees", require("./routes/employeeRoutes"));

// server start
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
