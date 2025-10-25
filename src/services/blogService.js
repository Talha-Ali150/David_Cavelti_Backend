import Blog from "../models/Blog.js";


export const createBlogService = async (data) => {
  return await Blog.create(data);
};

export const updateBlogService = async (id, data) => {
  return await Blog.findByIdAndUpdate(id, data, { new: true });
};

export const deleteBlogService = async (id) => {
  return await Blog.findByIdAndDelete(id);
};

export const getAllBlogsService = async () => {
  return await Blog.find().sort({ createdAt: -1 });
};

export const getBlogsByCategoryService = async (category, limit, page) => {
  const skip = (page - 1) * limit;
  const blogs = await Blog.find({ category })
    .sort({ createdAt: -1 })
    .skip(skip)
    .limit(limit);
  const total = await Blog.countDocuments({ category });
  return {
    blogs,
    total,
    page,
    pages: Math.ceil(total / limit),
  };
};
