import {
  createBlogService,
  updateBlogService,
  deleteBlogService,
  getAllBlogsService,
  getBlogsByCategoryService,
} from "../services/blogService.js";

export const createBlogController = async (req, res, next) => {
  try {
    const { title, content, category } = req.body;
    const image = req.file ? req.file.path : "";

    if (!title || !content || !category) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const blog = await createBlogService({ title, content, category, image });
    res.status(201).json({ success: true, data: blog });
  } catch (err) {
    next(err);
  }
};

export const updateBlogController = async (req, res, next) => {
  try {
    const { title, content, category } = req.body;
    const updateData = { title, content, category };

    if (req.file) {
      updateData.image = req.file.path;
    }

    const blog = await updateBlogService(req.params.id, updateData);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });

    res.json({ success: true, data: blog });
  } catch (err) {
    next(err);
  }
};

export const deleteBlogController = async (req, res, next) => {
  try {
    const blog = await deleteBlogService(req.params.id);
    if (!blog) return res.status(404).json({ success: false, message: "Blog not found" });
    res.json({ success: true, message: "Blog deleted successfully" });
  } catch (err) {
    next(err);
  }
};

export const getAllBlogsController = async (req, res, next) => {
  try {
    const blogs = await getAllBlogsService();
    res.json({ success: true, data: blogs });
  } catch (err) {
    next(err);
  }
};

export const getBlogsByCategoryController = async (req, res, next) => {
  try {
    const { category } = req.params;
    const limit = parseInt(req.query.limit) || 10; 
    const page = parseInt(req.query.page) || 1; 
    const blogs = await getBlogsByCategoryService(category, limit, page);
    res.json({ success: true, data: blogs });
  } catch (err) {
    next(err);
  }
};