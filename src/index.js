const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const helmet = require("helmet");
const morgan = require("morgan");
const taskRoutes = require("./routes/taskRoutes");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
const MONGO_URL = process.env.MONGO_URL;

// Middleware
app.use(bodyParser.json());
app.use(helmet()); // Helmet for security headers
app.use(morgan("combined")); // Morgan for request logging

// MongoDB Connection
mongoose.connect(MONGO_URL);

// Use Task Routes
app.use("/", taskRoutes);

// Error Handling Middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
