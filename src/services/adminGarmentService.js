import Garment from "../models/Garment.js";

export const createGarmentService = async (data) => {
  const garment = new Garment(data);
  return await garment.save();
};

export const getGarmentsService = async () => {
  return await Garment.find();
};

export const updateGarmentService = async (id, data) => {
  return await Garment.findByIdAndUpdate(id, data, { new: true });
};

export const deleteGarmentService = async (id) => {
  return await Garment.findByIdAndDelete(id);
};