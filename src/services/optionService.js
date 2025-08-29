import Option from "../models/Option.js";

export const createOptionService = async (data) => Option.create(data);

export const getOptionsService = async (categoryId, page = 1, limit = 10) => {
  const skip = (page - 1) * limit;
  return Option.find({ category: categoryId })
    .skip(skip)
    .limit(limit)
    .sort({ createdAt: -1 });
};

export const getOptionByIdService = async (id) => Option.findById(id);

export const updateOptionService = async (id, data) => 
  Option.findByIdAndUpdate(id, data, { new: true });

export const deleteOptionService = async (id) => Option.findByIdAndDelete(id);