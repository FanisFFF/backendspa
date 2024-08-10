"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const searchController_1 = require("../controllers/searchController");
const router = (0, express_1.Router)();
// router.use(authMiddleware);
router.get("/get/:username", searchController_1.getSearchUsers);
exports.default = router;
