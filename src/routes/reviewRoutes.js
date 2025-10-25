import express from "express";
import {
  createReviewController,
  getAllReviewsController,
  deleteReviewController,
  updateReviewController,
} from "../controllers/reviewController.js";
import { authMiddleware, isAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.post("/", authMiddleware, createReviewController);
router.get("/", getAllReviewsController);
router.delete("/:id", authMiddleware, isAdmin, deleteReviewController);
router.put("/:id", authMiddleware, isAdmin, updateReviewController);

export default router;