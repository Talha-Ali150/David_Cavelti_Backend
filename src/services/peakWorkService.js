import PeakWork from "../models/PeakWork.js";

export const createPeakWorkService = async (userId, { description, imageUrl }) => {
  if (!description || !imageUrl) throw new Error("Image and description are required");

  const peakWork = new PeakWork({
    user: userId,
    image: imageUrl,
    description,
  });

  await peakWork.save();
  return peakWork;
};

export const getAllPeakWorksService = async (active) => {
  const filter = {};
  if (active === "true") filter.isActive = true;
  return await PeakWork.find(filter).populate("user", "name email");
};

export const deletePeakWorkService = async (id) => {
  const work = await PeakWork.findByIdAndDelete(id);
  if (!work) throw new Error("Peak work not found");
  return { message: "Peak work deleted successfully" };
};

export const updatePeakWorkService = async (id) => {
  return await PeakWork.findByIdAndUpdate(id, { isActive: true }, { new: true })
};