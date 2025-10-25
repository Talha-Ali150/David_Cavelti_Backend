import express from "express";
import {
  createPeakWorkController,
  getAllPeakWorksController,
  deletePeakWorkController,
  updatePeakWorkController,
} from "../controllers/peakWorkController.js";
import upload from "../middlewares/upload.js";
import { authMiddleware, isAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", authMiddleware, upload.single("image"), createPeakWorkController);
router.get("/", getAllPeakWorksController);
router.delete("/:id", authMiddleware, isAdmin, deletePeakWorkController);
router.put("/:id", authMiddleware, isAdmin, updatePeakWorkController);

export default router;