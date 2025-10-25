import mongoose from "mongoose";

const FabricSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },       // e.g. "Italian Wool"
    description: { type: String },
    price: { type: Number, required: true },      // base fabric price
    textureImage: { type: String, required: true }, // swatch/texture image
    garmentType: {
      type: String,
      required: true,
      enum: ["shirt", "pant", "vest", "jacket"]   // what garments can use this fabric
    }
  },
  { timestamps: true }
);

export default mongoose.model("Fabric", FabricSchema);