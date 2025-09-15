import {
  getClientGarmentsService,
  getClientCategoriesService,
  getClientOptionsService,
} from "../services/clientService.js";


export const getClientGarmentsController = async (req, res, next) => {
  try {
    const garments = await getClientGarmentsService();
    res.json(garments);
  } catch (err) {
    next(err);
  }
};

export const getClientCategoriesController = async (req, res, next) => {
  try {
    const { garmentId } = req.query;
    const categories = await getClientCategoriesService(garmentId);
    res.json(categories);
  } catch (err) {
    next(err);
  }
};

export const getClientOptionsController = async (req, res, next) => {
  try {
    const { categoryId } = req.query;
    const options = await getClientOptionsService(categoryId);
    res.json(options);
  } catch (err) {
    next(err);
  }
};