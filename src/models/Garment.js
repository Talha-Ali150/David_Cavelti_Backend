import mongoose from "mongoose";

const garmentsSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
}, { timestamps: true });

export default mongoose.model("Garment", garmentsSchema);