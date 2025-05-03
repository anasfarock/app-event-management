require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { syncDB } = require("./models");
const authRoutes = require("./routes/authRoutes");
const eventRoutes = require("./routes/eventRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", authRoutes);
app.use("/api", eventRoutes);

const PORT = process.env.PORT || 3000;

syncDB().then(() => {
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
});
