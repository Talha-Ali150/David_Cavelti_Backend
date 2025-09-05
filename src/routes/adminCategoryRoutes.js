import express from "express";
import { createCategoryController, deleteCategoryController, getCategoriesController, updateCategoryController } from "../controllers/adminCategoryController.js";

const router = express.Router();

router.post("/", createCategoryController);
router.get("/", getCategoriesController);
router.put("/:id", updateCategoryController);
router.delete("/:id", deleteCategoryController);

export default router;
