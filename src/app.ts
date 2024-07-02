// src/app.ts
import express from "express";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import authRoutes from "./routes/authRoutes";
import dataRoutes from "./routes/dataRoutes";

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/spaapp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
} as ConnectOptions);

app.use("/auth", authRoutes);
app.use("/data", dataRoutes);

export default app;
