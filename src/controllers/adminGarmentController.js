import {
  createGarmentService,
  getGarmentsService,
  getGarmentByIdService,
  updateGarmentService,
  deleteGarmentService,
} from "../services/adminGarmentService.js";

export const createGarmentController = async (req, res, next) => {
  try {
    const garment = await createGarmentService(req.body, req.file);
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

export const getGarmentByIdController = async (req, res, next) => {
  try {
    const garment = await getGarmentByIdService(req.params.id);
    if (!garment) return res.status(404).json({ message: "Garment not found" });
    res.json(garment);
  } catch (err) {
    next(err);
  }
};

export const updateGarmentController = async (req, res, next) => {
  try {
    const garment = await updateGarmentService(req.params.id, req.body);
    if (!garment) return res.status(404).json({ message: "Garment not found" });
    res.json(garment);
  } catch (err) {
    next(err);
  }
};

export const deleteGarmentController = async (req, res, next) => {
  try {
    const deleted = await deleteGarmentService(req.params.id);
    if (!deleted) return res.status(404).json({ message: "Garment not found" });
    res.json({ message: "Garment deleted" });
  } catch (err) {
    next(err);
  }
};