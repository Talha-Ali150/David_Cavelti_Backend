import Garment from "../models/Garment.js";
import Category from "../models/Category.js";
import Option from "../models/Option.js";

const recursivePopulate = [
  {
    path: "subOptions",
    match: { isActive: true },
    populate: {
      path: "subOptions",
      match: { isActive: true },
      populate: {
        path: "subOptions",
        match: { isActive: true },
      },
    },
  },
];

export const getClientGarmentsService = async () => {
  return await Garment.find()
    .populate({
      path: "categories",
      populate: {
        path: "options",
        match: { isActive: true },
      },
    });
};

export const getClientCategoriesService = async (garmentId) => {
  const filter = garmentId ? { garment: garmentId } : {};
  return await Category.find(filter)
    .populate({
      path: "options",
      match: { isActive: true, parentOption: null }, 
      populate: recursivePopulate,
    });
};

export const getClientOptionsService = async (categoryId) => {
  const filter = categoryId
    ? { category: categoryId, isActive: true, parentOption: null }
    : { isActive: true, parentOption: null };

  return await Option.find(filter).populate(recursivePopulate);
};