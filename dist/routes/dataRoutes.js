"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/dataRoutes.ts
const express_1 = require("express");
const dataController_1 = require("../controllers/dataController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.use(authMiddleware_1.default);
router.get("/get", dataController_1.getDocuments);
router.post("/create", dataController_1.createDocument);
router.post("/set/:id", dataController_1.updateDocument);
router.post("/delete/:id", dataController_1.deleteDocument);
exports.default = router;
