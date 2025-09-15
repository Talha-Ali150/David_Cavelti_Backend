import Garment from "../models/Garment.js";
import Option from "../models/Option.js";

export const createGarmentService = async (data, file) => {
  if (!file) throw new Error("No file uploaded");

  const garment = new Garment({
    ...data,
    image: file.path || file.secure_url || null,
  });

  return await garment.save();
};

export const getGarmentsService = async () => {
  return await Garment.find()
    .populate("categories")
    .lean();
};

export const getGarmentByIdService = async (id) => {
  return await Garment.findById(id)
    .populate({
      path: "categories",
      populate: {
        path: "options",
        populate: {
          path: "subOptions",
          model: "Option",
        },
      },
    })
    .lean();
};

export const updateGarmentService = async (id, data) => {
  return await Garment.findByIdAndUpdate(id, data, { new: true });
};

export const deleteGarmentService = async (id) => {
  return await Garment.findByIdAndDelete(id);
};