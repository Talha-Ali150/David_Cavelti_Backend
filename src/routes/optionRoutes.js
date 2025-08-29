import express from "express";
import {
  createOption,
  getOptions,
  getOptionById,
  updateOption,
  deleteOption,
} from "../controllers/optionController.js";

const router = express.Router();

router.post("/", createOption);
router.get("/:categoryId", getOptions);
router.get("/single/:id", getOptionById);
router.put("/:id", updateOption);
router.delete("/:id", deleteOption);

export default router;