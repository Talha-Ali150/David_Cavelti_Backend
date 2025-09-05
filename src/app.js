import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
// import garmentRoutes from "./routes/garmentRoutes.js";
// import categoryRoutes from "./routes/categoryRoutes.js";
// import optionRoutes from "./routes/optionRoutes.js";
import adminGarmentRoutes from "./routes/adminGarmentRoutes.js";
import adminCategoryRoutes from "./routes/adminCategoryRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(`/auth`, authRoutes);
// app.use(`/garments`, garmentRoutes);
// app.use(`/categories`, categoryRoutes);
// app.use(`/options`, optionRoutes);
app.use(`/garments`, adminGarmentRoutes)
app.use(`/categories`, adminCategoryRoutes)

app.use(errorHandler);

export default app;