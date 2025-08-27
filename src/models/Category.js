import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  garment: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Garment",
    required: true
  }
},
  { timestamps: true });

export default mongoose.model("Category", categorySchema);