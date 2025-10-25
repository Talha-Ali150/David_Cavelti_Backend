import {
  createReviewService,
  getAllReviewsService,
  deleteReviewService,
  updateReviewService,
} from "../services/reviewService.js";

export const createReviewController = async (req, res, next) => {
  try {
    const result = await createReviewService(req.user.id, req.body);
    res.status(201).json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const getAllReviewsController = async (req, res, next) => {
  try {
    const result = await getAllReviewsService();
    res.json({ success: true, data: result });
  } catch (err) {
    next(err);
  }
};

export const deleteReviewController = async (req, res, next) => {
  try {
    const result = await deleteReviewService(req.params.id);
    res.json({ success: true, ...result });
  } catch (err) {
    next(err);
  }
};

export const updateReviewController = async (req, res, next) => {
  try {
    const result = await updateReviewService(req.params.id);
    if (!result) throw new Error("no review found with given id");
    res.json({ success: true });
  } catch (err) {
    next(err);
  }
};