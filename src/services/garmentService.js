import Garment from "../models/Garment.js";

export const createGarmentService = async (data) => Garment.create(data);

export const getGarmentsService = async (page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  return Garment.find()
    .skip(skip)
    .limit(limit)
    .populate({
      path: "categories",
      options: { sort: { layerOrder: 1 } },
    });
};

export const getGarmentByIdService = async (id) => 
  Garment.findById(id).populate({
    path: "categories",
    options: { sort: { layerOrder: 1 } },
    populate: { path: "options" },
  });

export const updateGarmentService = async (id, data) => 
  Garment.findByIdAndUpdate(id, data, { new: true });

export const deleteGarmentService = async (id) => Garment.findByIdAndDelete(id);