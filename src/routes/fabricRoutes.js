import express from "express";
import { getAllFabrics, getFabric } from "../controllers/fabricController.js";

const router = express.Router();

router.get("/", getAllFabrics);
router.get("/:id", getFabric);

export default router;
