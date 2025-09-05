import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  garment: { type: mongoose.Schema.Types.ObjectId, ref: "Garment", required: true },
  name: { type: String, required: true },
  layerOrder: { type: Number, required: true },
  view: { type: String, enum: ["front", "back", "both"], default: "both" }
}, { timestamps: true });

categorySchema.virtual("options", {
  ref: "Option",
  localField: "_id",
  foreignField: "category",
});

categorySchema.set("toObject", { virtuals: true });
categorySchema.set("toJSON", { virtuals: true });

export default mongoose.model("Category", categorySchema);
