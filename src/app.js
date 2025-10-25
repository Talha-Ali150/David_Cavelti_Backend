import express from "express";
import cors from "cors";
import { errorHandler } from "./middlewares/errorMiddleware.js";
import authRoutes from "./routes/authRoutes.js";
import fabricRoutes from "./routes/fabricRoutes.js";
import fabricConfigRoutes from "./routes/fabricConfigRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import reviewRoutes from "./routes/reviewRoutes.js";
import peakWorkRoutes from "./routes/peakWorkRoutes.js";
import slideRoutes from "./routes/slideRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(`/auth`, authRoutes);
app.use("/api/fabrics", fabricRoutes);
app.use("/api/configs", fabricConfigRoutes);
app.use("/api/blogs", blogRoutes);
app.use("/api/contact", contactRoutes);
app.use("/api/reviews", reviewRoutes);
app.use("/api/peak-works", peakWorkRoutes);
app.use("/api/slides", slideRoutes);

app.use(errorHandler);

export default app;