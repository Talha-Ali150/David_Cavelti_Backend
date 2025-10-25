import express from "express";
import { createBlogController, deleteBlogController, getAllBlogsController, getBlogsByCategoryController, updateBlogController } from "../controllers/blogController.js"
import { authMiddleware, isAdmin } from "../middlewares/auth.js"
import upload from "../middlewares/upload.js";

const router = express.Router();

router.post("/", authMiddleware, isAdmin, upload.single("image"), createBlogController);
router.put("/:id", authMiddleware, isAdmin, upload.single("image"), updateBlogController);
router.delete("/:id", authMiddleware, isAdmin, deleteBlogController);
router.get("/", getAllBlogsController);
router.get("/category/:category", getBlogsByCategoryController);

export default router;