"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
router.use(authMiddleware_1.default);
router.get("/get", userController_1.getUsers);
router.get("/get/:id", userController_1.getUser);
exports.default = router;
