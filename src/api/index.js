// src/api/index.js
import express from "express";
import cors from "cors";
import config from "./config/config.js";
import router from "./router/router.js";

const app = express();

app.use(
  cors({
    origin: "https://smart-att.curaweda.com",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS",
    credentials: true,
  })
);

app.use(express.json());

// Logging middleware
app.use((req, res, next) => {
  console.log("Request Method:", req.method);
  console.log("Request Path:", req.path);
  console.log("Content-Type:", req.get("Content-Type"));
  console.log("Request Body (raw):", req.body);
  next();
});

// Route handling
app.use("/api", router);

// Error handling middleware
app.use((err, req, res, next) => {
  console.error("Error:", err);
  res.status(500).json({ error: err.message || "Something went wrong" });
});

// Export the app for Vercel's serverless function handler
export default app;
