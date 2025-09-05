import { createCategoryService, getCategoriesService, updateCategoryService, deleteCategoryService } from "../services/adminCategoryService.js";

export const createCategoryController = async (req, res, next) => {
  try {
    const category = await createCategoryService(req.body);
    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};

export const getCategoriesController = async (req, res, next) => {
  try {
    const { garmentId } = req.query;
    console.log('garni', garmentId);  
    const categories = await getCategoriesService(garmentId);
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

export const updateCategoryController = async (req, res, next) => {
  try {
    const category = await updateCategoryService(req.params.id, req.body);
    res.json(category);
  } catch (err) {
    next(err);
  }
};

export const deleteCategoryController = async (req, res, next) => {
  try {
    await deleteCategoryService(req.params.id);
    res.json({ message: "Category deleted" });
  } catch (err) {
    next(err);
  }
};
