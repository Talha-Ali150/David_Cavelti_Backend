import express from "express";
import { contactUsController } from "../controllers/contactController.js";

const router = express.Router();

router.post("/", contactUsController);

export default router;
