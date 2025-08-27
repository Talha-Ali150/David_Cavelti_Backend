import Category from "../models/Category.js";

export const createCategoryService = async (data) => {
  return await Category.create(data);
};

export const getCategoriesByGarmentService = async (garmentId) => {
  return await Category.find({ garment: garmentId });
};

export const getCategoryByIdService = async (id) => {
  return await Category.findById(id).populate("garment", "name");
};

export const updateCategoryService = async (id, data) => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCategoryService = async (id) => {
  return await Category.findByIdAndDelete(id);
};