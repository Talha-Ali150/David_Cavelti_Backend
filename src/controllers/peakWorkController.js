import {
  createPeakWorkService,
  getAllPeakWorksService,
  deletePeakWorkService,
  updatePeakWorkService
} from "../services/peakWorkService.js";

export const createPeakWorkController = async (req, res, next) => {
  try {
    const { description } = req.body;
    const imageUrl = req.file?.path;

    if (!imageUrl) throw new Error("Image is required");

    const result = await createPeakWorkService(req.user.id, { description, imageUrl });
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const getAllPeakWorksController = async (req, res, next) => {
  try {
    const { active } = req.query;
    const result = await getAllPeakWorksService(active);
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const deletePeakWorkController = async (req, res, next) => {
  try {
    const result = await deletePeakWorkService(req.params.id);
    res.json({ success: true, ...result });
  } catch (err) {
    next(err);
  }
};

export const updatePeakWorkController = async (req, res, next) => {
  try {
    const result = await updatePeakWorkService(req.params.id);
    if (!result) throw new Error("no review found with given id");
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};