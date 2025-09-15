import Category from "../models/Category.js";

export const createCategoryService = async (data) => {
  if (!data.layerOrder) {
    const last = await Category.findOne({ garment: data.garment })
      .sort("-layerOrder");
    data.layerOrder = last ? last.layerOrder + 1 : 1;
  }

  const category = new Category(data);
  return await category.save();
};

export const getCategoriesService = async (garmentId) => {
  const filter = garmentId ? { garment: garmentId } : {};
  return await Category.find(filter)
    .populate("garment", "name")
    .populate("options")
    .sort("layerOrder")
    .lean();
};

export const getCategoryByIdService = async (id) => {
  return await Category.findById(id)
    .populate("garment", "name")
    .populate({
      path: "options",
      populate: {
        path: "subOptions",
        model: "Option",
      },
    })
    .lean();
};

export const updateCategoryService = async (id, data) => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};

export const deleteCategoryService = async (id) => {
  return await Category.findByIdAndDelete(id);
};