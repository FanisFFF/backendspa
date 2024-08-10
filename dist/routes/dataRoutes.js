"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const dataController_1 = require("../controllers/dataController");
const authMiddleware_1 = __importDefault(require("../middleware/authMiddleware"));
const router = (0, express_1.Router)();
router.use(authMiddleware_1.default);
router.get("/get", dataController_1.getDocuments);
router.get("/get/:username", dataController_1.getProfileDocuments);
router.get("/get/:username/:id", dataController_1.getPost);
router.post("/create/:id", dataController_1.replyDocument);
router.post("/like/:id", dataController_1.likeDocument);
router.post("/create", dataController_1.createDocument);
router.post("/set/:id", dataController_1.updateDocument);
router.post("/delete/:id", dataController_1.deleteDocument);
exports.default = router;
