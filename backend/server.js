import dotenv from "dotenv";
import express from "express";
import cors from "cors";

import { syncDB } from "./models/index.js";
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", authRoutes);
app.use("/api", eventRoutes);

const PORT = process.env.PORT || 3000;

syncDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
