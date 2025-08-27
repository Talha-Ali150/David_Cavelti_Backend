import { createCategoryService, deleteCategoryService, getCategoriesByGarmentService, getCategoryByIdService, updateCategoryService } from "../services/categoryServices.js";

export const createCategoryController = async (req, res, next) => {
  try {
    const category = await createCategoryService(req.body);
    res.status(201).json(category);
  } catch (err) {
    next(err);
  }
};

export const getCategoriesByGarmentController = async (req, res, next) => {
  try {
    const categories = await getCategoriesByGarmentService(req.params.garmentId);
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

export const getCategoryByIdController = async (req, res, next) => {
  try {
    const category = await getCategoryByIdService(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.json(category);
  } catch (err) {
    next(err);
  }
};

export const updateCategoryController = async (req, res, next) => {
  try {
    const category = await updateCategoryService(req.params.id, req.body);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.json(category);
  } catch (err) {
    next(err);
  }
};

export const deleteCategoryController = async (req, res, next) => {
  try {
    const category = await deleteCategoryService(req.params.id);
    if (!category) return res.status(404).json({ message: "Category not found" });
    res.json({ message: "Category deleted" });
  } catch (err) {
    next(err);
  }
};