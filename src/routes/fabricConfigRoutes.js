import express from "express";
import { getConfigsForGarment, getConfigForFabric } from "../controllers/fabricConfigController.js";

const router = express.Router();

router.get("/garment/:garment", getConfigsForGarment);  // e.g. /api/configs/garment/Jacket
router.get("/fabric/:fabricId", getConfigForFabric);    // e.g. /api/configs/fabric/650...

export default router;
