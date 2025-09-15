import express from "express";
import {
  getClientGarmentsController,
  getClientCategoriesController,
  getClientOptionsController,
} from "../controllers/clientController.js";

const router = express.Router();

router.get("/garments", getClientGarmentsController);
router.get("/categories", getClientCategoriesController);
router.get("/options", getClientOptionsController);

export default router;