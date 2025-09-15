import express from "express";
import {
  createGarmentController,
  getGarmentsController,
  getGarmentByIdController,
  updateGarmentController,
  deleteGarmentController,
} from "../controllers/adminGarmentController.js";
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/", upload.single("image"), createGarmentController);
router.get("/", getGarmentsController);
router.get("/:id", getGarmentByIdController);
router.put("/:id", updateGarmentController);
router.delete("/:id", deleteGarmentController);

export default router;