import express from "express";
import cors from "cors";
import mongoose, { ConnectOptions } from "mongoose";
import authRoutes from "./routes/authRoutes";
import dataRoutes from "./routes/dataRoutes";
import userRoutes from "./routes/userRoutes";
import searchRoutes from "./routes/searchRoutes";
import "dotenv/config";
const app = express();

app.use(cors());
app.use(express.json());
mongoose.connect(
  // process.env.CONNECTION_STRING as string
  "mongodb://127.0.0.1:27017/newspa",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  } as ConnectOptions
);

app.use("/auth", authRoutes);
app.use("/data", dataRoutes);
app.use("/user", userRoutes);
app.use("/search", searchRoutes);

export default app;
//
