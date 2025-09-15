import express from "express";
import {
  createOptionController,
  getOptionsController,
  updateOptionController,
  deleteOptionController,
} from "../controllers/adminOptionController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/", upload.fields([
  { name: "imageUrlDisplay", maxCount: 1 },
  { name: "imageUrlBuild", maxCount: 1 }
]), createOptionController);
router.get("/", getOptionsController);
router.put("/:id", updateOptionController);
router.delete("/:id", deleteOptionController);

export default router;