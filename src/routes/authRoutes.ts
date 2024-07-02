// src/routes/authRoutes.ts
import { Router } from "express";
import { register, login } from "../controllers/authController";

const router = Router();

router.post("/register", register);
router.post("/login", login);

export default router;
//  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjgwMGQ1MjZlNGQxOWRhMTNmYjM5NDQiLCJpYXQiOjE3MTk2Njg1MTgsImV4cCI6MTcxOTY3MjExOH0.cmR6nmlrcb2EjdXW5jU9IUMyCNWu8F7XazmsOFS9f9Q"
const token = {
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjgwMGQ1MjZlNGQxOWRhMTNmYjM5NDQiLCJpYXQiOjE3MTk4MzcyOTYsImV4cCI6MTcxOTg0MDg5Nn0.olf-IIoJGw8CNQL6NF1T7wHWFGf2XVSQaDj9XZ1fw_c",
};
