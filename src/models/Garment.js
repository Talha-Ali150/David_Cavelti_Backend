import mongoose from "mongoose";

const garmentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: false },
}, { timestamps: true });

garmentSchema.virtual("categories", {
  ref: "Category",
  localField: "_id",
  foreignField: "garment",
});

garmentSchema.set("toObject", { virtuals: true });
garmentSchema.set("toJSON", { virtuals: true });

export default mongoose.model("Garment", garmentSchema);