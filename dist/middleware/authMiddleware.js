"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const secret = "your_jwt_secret";
const authMiddleware = (req, res, next) => {
    const token = req.headers["x-auth"];
    if (!token)
        return res.status(401).json({ error: "No token provided" });
    try {
        const decoded = jsonwebtoken_1.default.verify(token, secret);
        req.body.userId = decoded.userId;
        next();
    }
    catch (err) {
        res.status(401).json({ error: "Invalid token" });
    }
};
exports.default = authMiddleware;
