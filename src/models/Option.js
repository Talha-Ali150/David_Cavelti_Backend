import mongoose from "mongoose";

const optionSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    category: { type: mongoose.Schema.Types.ObjectId, ref: "Category" },
    parentOption: { type: mongoose.Schema.Types.ObjectId, ref: "Option", default: null },
    imageUrlDisplay: { type: String },
    imageUrlBuild: { type: String },
    price: { type: Number, default: 0 },
    isActive: { type: Boolean, default: true },
  },
  { timestamps: true }
);

optionSchema.virtual("subOptions", {
  ref: "Option",
  localField: "_id",
  foreignField: "parentOption",
});

optionSchema.set("toObject", { virtuals: true });
optionSchema.set("toJSON", { virtuals: true });

export default mongoose.model("Option", optionSchema);