// src/routes/dataRoutes.ts
import { Router } from "express";
import {
  getDocuments,
  createDocument,
  updateDocument,
  deleteDocument,
} from "../controllers/dataController";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.use(authMiddleware);

router.get("/get", getDocuments);
router.post("/create", createDocument);
router.post("/set/:id", updateDocument);
router.post("/delete/:id", deleteDocument);

export default router;
