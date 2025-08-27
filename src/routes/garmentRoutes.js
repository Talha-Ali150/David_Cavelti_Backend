import { createGarmentController, deleteGarmentController, getGarmentByIdController, getGarmentsController, updateGarmentController } from "../controllers/garmentController.js";
import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/auth.js";

const router = express.Router();

router.get(`/`, getGarmentsController);
router.get(`/:id`, getGarmentByIdController);

router.post(`/`, authMiddleware, isAdmin, createGarmentController);
router.put(`/:id`, authMiddleware, isAdmin, updateGarmentController);
router.delete(`/:id`, authMiddleware, isAdmin, deleteGarmentController);

export default router;
