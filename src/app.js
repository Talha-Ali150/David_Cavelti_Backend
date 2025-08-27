import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
import garmentRoutes from "./routes/garmentRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(`/auth`, authRoutes);
app.use(`/garments`, garmentRoutes);

app.use(errorHandler);

export default app;