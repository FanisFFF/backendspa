import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware";
import { getSearchUsers } from "../controllers/searchController";

const router = Router();

// router.use(authMiddleware);

router.get("/get/:username", getSearchUsers);

export default router;
