import { Router } from "express";
import {
  getDocuments,
  createDocument,
  updateDocument,
  deleteDocument,
  getProfileDocuments,
  getPost,
  replyDocument,
  likeDocument,
} from "../controllers/dataController";
import authMiddleware from "../middleware/authMiddleware";

const router = Router();

router.use(authMiddleware);

router.get("/get", getDocuments);
router.get("/get/:username", getProfileDocuments);
router.get("/get/:username/:id", getPost);
router.post("/create/:id", replyDocument);
router.post("/like/:id", likeDocument);
router.post("/create", createDocument);
router.post("/set/:id", updateDocument);
router.post("/delete/:id", deleteDocument);

export default router;
