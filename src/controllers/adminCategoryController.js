import {
  createCategoryService,
  getCategoriesService,
  getCategoryByIdService,
  updateCategoryService,
  deleteCategoryService,
} from "../services/adminCategoryService.js";

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
    const categories = await getCategoriesService(garmentId);
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
    const deleted = await deleteCategoryService(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Category not found" });
    res.json({ message: "Category deleted" });
  } catch (err) {
    next(err);
  }
};