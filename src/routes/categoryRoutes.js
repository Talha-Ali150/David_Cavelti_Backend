import express from "express";
import { authMiddleware, isAdmin } from "../middlewares/auth.js";
import { createCategoryController, deleteCategoryController, getCategoriesByGarmentController, getCategoryByIdController, updateCategoryController } from "../controllers/categoryController.js";

const router = express.Router();

router.get("/:garmentId", getCategoriesByGarmentController);
router.get("/single/:id", getCategoryByIdController);

router.post("/", authMiddleware, isAdmin, createCategoryController);
router.put("/:id", authMiddleware, isAdmin, updateCategoryController);
router.delete("/:id", authMiddleware, isAdmin, deleteCategoryController);

export default router;