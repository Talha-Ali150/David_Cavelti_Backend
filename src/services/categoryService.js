import Category from "../models/Category.js";

export const createCategoryService = async (data) => Category.create(data);

export const getCategoriesService = async (garmentId, page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  return Category.find({ garment: garmentId })
    .sort({ layerOrder: 1 })
    .skip(skip)
    .limit(limit)
    .populate("options");
};

export const getCategoryByIdService = async (id) => 
  Category.findById(id).populate("options");

export const updateCategoryService = async (id, data) => 
  Category.findByIdAndUpdate(id, data, { new: true });

export const deleteCategoryService = async (id) => Category.findByIdAndDelete(id);