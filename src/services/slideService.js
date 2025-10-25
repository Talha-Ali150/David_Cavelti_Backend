import { Slide } from "../models/Slide.js";

export const createSlideService = async (data) => {
  const slide = new Slide(data);
  return await slide.save();
};

export const getSlidesService = async () => {
  return await Slide.find().sort({ createdAt: -1 });
};

export const getSlideByIdService = async (id) => {
  return await Slide.findById(id);
};

export const updateSlideService = async (id, data) => {
  return await Slide.findByIdAndUpdate(id, data, { new: true });
};

export const deleteSlideService = async (id) => {
  return await Slide.findByIdAndDelete(id);
};
