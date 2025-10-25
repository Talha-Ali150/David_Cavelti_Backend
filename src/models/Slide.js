import mongoose from "mongoose";

const slideSchema = new mongoose.Schema(
  {
    src: {
      type: String,
      required: true,
    },
    heading: {
      type: String,
      required: true,
    },
    subheading: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export const Slide = mongoose.model("Slide", slideSchema);