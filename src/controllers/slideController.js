import {
  createSlideService,
  getSlidesService,
  getSlideByIdService,
  updateSlideService,
  deleteSlideService,
} from "../services/slideService.js";

export const createSlideController = async (req, res, next) => {
  try {
    const data = {
      src: req.file?.path,
      heading: req.body.heading,
      subheading: req.body.subheading,
    };

    const slide = await createSlideService(data);
    res.status(201).json(slide);
  } catch (err) {
    next(err);
  }
};

export const getSlidesController = async (req, res, next) => {
  try {
    const slides = await getSlidesService();
    res.json(slides);
  } catch (err) {
    next(err);
  }
};

export const getSlideByIdController = async (req, res, next) => {
  try {
    const slide = await getSlideByIdService(req.params.id);
    if (!slide) return res.status(404).json({ message: "Slide not found" });
    res.json(slide);
  } catch (err) {
    next(err);
  }
};

export const updateSlideController = async (req, res, next) => {
  try {
    const data = {
      heading: req.body.heading,
      subheading: req.body.subheading,
    };

    if (req.file?.path) data.src = req.file.path;

    const updatedSlide = await updateSlideService(req.params.id, data);
    if (!updatedSlide) return res.status(404).json({ message: "Slide not found" });
    res.json(updatedSlide);
  } catch (err) {
    next(err);
  }
};

export const deleteSlideController = async (req, res, next) => {
  try {
    const deletedSlide = await deleteSlideService(req.params.id);
    if (!deletedSlide) return res.status(404).json({ message: "Slide not found" });
    res.json({ message: "Slide deleted successfully" });
  } catch (err) {
    next(err);
  }
};