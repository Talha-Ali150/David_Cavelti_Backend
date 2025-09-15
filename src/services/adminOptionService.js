import Option from "../models/Option.js";

export const createOptionService = async (data) => {
  const option = new Option(data);
  return await option.save();
};

export const getOptionsService = async (categoryId) => {
  const filter = categoryId ? { category: categoryId } : {};
  return await Option.find(filter)
    .populate("subOptions") 
    .populate("category", "name"); 
};

export const updateOptionService = async (id, data) => {
  return await Option.findByIdAndUpdate(id, data, { new: true })
    .populate("subOptions")
    .populate("category", "name");
};

export const deleteOptionService = async (id) => {
  return await Option.findByIdAndDelete(id);
};