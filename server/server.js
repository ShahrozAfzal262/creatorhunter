import "dotenv/config";
import "express-async-errors";
import express from "express";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import creatorRoutes from "./routes/creatorRoutes.js";
import listRoutes from "./routes/listRoutes.js";
import outreachRoutes from "./routes/outreachRoutes.js";
import errorHandler from "./middleware/errorHandler.js";

const app = express();
app.use(cors({ origin: process.env.CLIENT_URL || "http://localhost:5173" }));
app.use(express.json());
app.get("/api/health", (req, res) => res.json({ ok: true }));
app.use("/api/auth", authRoutes);
app.use("/api/creators", creatorRoutes);
app.use("/api/lists", listRoutes);
app.use("/api/outreach", outreachRoutes);
app.use(errorHandler);

const port = process.env.PORT || 5000;
connectDB().then(() => app.listen(port, () => console.log(`API on http://localhost:${port}`)));
