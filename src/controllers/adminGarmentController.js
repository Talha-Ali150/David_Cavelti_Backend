import { createGarmentService, getGarmentsService, updateGarmentService, deleteGarmentService } from "../services/adminGarmentService.js";

export const createGarmentController = async (req, res, next) => {
  try {
    const garment = await createGarmentService(req.body);
    res.status(201).json(garment);
  } catch (err) {
    next(err);
  }
};

export const getGarmentsController = async (req, res, next) => {
  try {
    const garments = await getGarmentsService();
    res.json(garments);
  } catch (err) {
    next(err);
  }
};

export const updateGarmentController = async (req, res, next) => {
  try {
    const garment = await updateGarmentService(req.params.id, req.body);
    res.json(garment);
  } catch (err) {
    next(err);
  }
};

export const deleteGarmentController = async (req, res, next) => {
  try {
    await deleteGarmentService(req.params.id);
    res.json({ message: "Garment deleted" });
  } catch (err) {
    next(err);
  }
};
