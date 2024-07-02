// src/app.ts
import express from "express";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import authRoutes from "./routes/authRoutes";
import dataRoutes from "./routes/dataRoutes";
import "dotenv/config";
const app = express();

app.use(cors());
app.use(express.json());
console.log(process.env.CONNECTION_STRING);
mongoose.connect(
  process.env.CONNECTION_STRING as string,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions
);

app.use("/auth", authRoutes);
app.use("/data", dataRoutes);

export default app;
//
