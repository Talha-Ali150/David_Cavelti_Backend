import express from "express";
import { createGarmentController, deleteGarmentController, getGarmentsController, updateGarmentController } from "../controllers/adminGarmentController.js";

const router = express.Router();

router.post("/", createGarmentController);
router.get("/", getGarmentsController);
router.put("/:id", updateGarmentController);
router.delete("/:id", deleteGarmentController);

export default router;
