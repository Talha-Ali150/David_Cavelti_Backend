import mongoose from "mongoose";

const NestedOptionSchema = new mongoose.Schema({
  optionId: { type: String, required: true },
  buildImage: { type: String },
  isActive: { type: Boolean, default: true },
  basePrice: { type: Number, default: 0 }
});

const OptionSchema = new mongoose.Schema({
  optionId: { type: String, required: true },
  buildImage: { type: String },
  isActive: { type: Boolean, default: true },
  basePrice: { type: Number, default: 0 },
  nestedOptions: [NestedOptionSchema]
});

const LiningSchema = new mongoose.Schema({
  buildImage: { type: String },
  isActive: { type: Boolean, default: true },
  basePrice: { type: Number, default: 0 }
});

const CategorySchema = new mongoose.Schema({
  categoryId: { type: String, required: true },

  // Normal options
  options: [OptionSchema],

  // Linings (default + custom variations)
  default: LiningSchema,
  custom: [OptionSchema]
});

const FabricConfigSchema = new mongoose.Schema(
  {
    garment: {
      type: String,
      required: true,
      enum: ["Jacket", "Pant", "Vest"]
    },
    fabric: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Fabric",
      required: true
    },
    categories: [CategorySchema]
  },
  { timestamps: true }
);

export default mongoose.model("FabricConfig", FabricConfigSchema);