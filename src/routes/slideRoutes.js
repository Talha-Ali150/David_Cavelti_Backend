import express from "express";
import upload from "../middlewares/upload.js";
import {
  createSlideController,
  getSlidesController,
  getSlideByIdController,
  updateSlideController,
  deleteSlideController,
} from "../controllers/slideController.js";

const router = express.Router();

router.post("/", upload.single("src"), createSlideController);
router.get("/", getSlidesController);
router.get("/:id", getSlideByIdController);
router.put("/:id", upload.single("src"), updateSlideController);
router.delete("/:id", deleteSlideController);

export default router;
