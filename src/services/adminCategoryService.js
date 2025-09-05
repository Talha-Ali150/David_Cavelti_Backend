import Category from "../models/Category.js";

export const createCategoryService = async (data) => {
  const layerOrder = await getNextLayerOrder(data.garment);
  const category = await Category.create({ ...data, layerOrder });
  return category;
};

export const getCategoriesService = async (garmentId) => {
  const filter = garmentId ? { garment: garmentId } : {};
  return await Category.find(filter);
};

export const updateCategoryService = async (id, data) => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCategoryService = async (id) => {
  return await Category.findByIdAndDelete(id);
};

export const getNextLayerOrder = async (garmentId) => {
  const lastCategory = await Category.find({ garment: garmentId })
    .sort({ layerOrder: -1 })
    .limit(1);

  return lastCategory.length > 0 ? lastCategory[0].layerOrder + 1 : 1;
};