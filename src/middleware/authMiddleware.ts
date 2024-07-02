// src/middleware/authMiddleware.ts
import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const secret = "your_jwt_secret";

const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers["x-auth"] as string;

  if (!token) return res.status(401).json({ error: "No token provided" });

  try {
    const decoded = jwt.verify(token, secret);
    req.body.userId = (decoded as any).userId;
    next();
  } catch (err) {
    res.status(401).json({ error: "Invalid token" });
  }
};

export default authMiddleware;
