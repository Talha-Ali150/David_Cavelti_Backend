import FabricConfig from "../models/FabricConfig.js";

export const getConfigsByGarment = async (garment) => {
  return await FabricConfig.find({ garment }).populate("fabric");
};

export const getConfigByFabric = async (fabricId) => {
  return await FabricConfig.findOne({ fabric: fabricId }).populate("fabric");
};
