// src/api/index.js
const express = require("express");
const app = express();

app.get("/hello", (req, res) => {
  res.send("Hello from Express!");
});

// Export the Express app to be used as a serverless function
module.exports = app;
