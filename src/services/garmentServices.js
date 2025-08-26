import Garment from "../models/Garment.js";

export const createGarmentService = async (data) => {
  return await Garment.create(data);
};

export const getGarmentsService = async () => {
  return Garment.find();
};

export const getGarmentByIdService = async (id) => {
  return await Garment.findById(id);
};

export const updateGarmentService = async (id, data) => {
  return await Garment.findByIdAndUpdate(id, data, { new: true });
};

export const deleteGarmentService = async (id) => {
  return await Garment.findByIdAndDelete(id);
}