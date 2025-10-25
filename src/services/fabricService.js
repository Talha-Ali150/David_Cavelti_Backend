import Fabric from "../models/Fabric.js";

export const getFabrics = async () => {
  return await Fabric.find();
};

export const getFabricById = async (id) => {
  return await Fabric.findById(id);
};
