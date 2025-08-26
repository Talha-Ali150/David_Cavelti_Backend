import { createGarmentService, deleteGarmentService, getGarmentByIdService, getGarmentsService, updateGarmentService } from "../services/garmentServices.js"

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

export const getGarmentByIdController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const garment = await getGarmentByIdService(id);
    if (!garment) return res.status(404).json({ message: `Garment not found` });
    res.json(garment);
  } catch (err) {
    next(err);
  }
};

export const updateGarmentController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const garment = await updateGarmentService(id, req.body);
    if (!garment) return res.status(404).json({ message: `Garment not found` });
    res.json(garment);
  } catch (err) {
    next(err);
  }
};

export const deleteGarmentController = async (req, res, next) => {
  const { id } = req.params;
  try {
    const garment = await deleteGarmentService(id);
    if (!garment) return res.status(404).json({ message: `Garment not found` });
    res.json({ message: `Garment deleted` });
  } catch (err) {
    next(err);
  }
};