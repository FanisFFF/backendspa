import { Router } from "express";
import authMiddleware from "../middleware/authMiddleware";
import { getUser, getUsers } from "../controllers/userController";

const router = Router();

router.use(authMiddleware);

router.get("/get", getUsers);
router.get("/get/:id", getUser);

export default router;
