import Review from "../models/Review.js";

export const createReviewService = async (userId, { rating, review }) => {
  if (!rating || !review) throw new Error("Rating and review are required");
  const newReview = new Review({ user: userId, rating, review });
  await newReview.save();
  return newReview;
};

export const getAllReviewsService = async (active) => {
  let filter = {}
  if (active === "true") filter.isActive = true;
  return await Review.find().populate("user", "name email");
};

export const deleteReviewService = async (id) => {
  const review = await Review.findByIdAndDelete(id);
  if (!review) throw new Error("Review not found");
  return { message: "Review deleted successfully" };
};

export const updateReviewService = async (id) => {
  return await Review.findByIdAndUpdate(id, { isActive: true }, { new: true })
};