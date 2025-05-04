import { DataTypes } from "sequelize";
import sequelize from "../config/db.js";

const Event = sequelize.define("Event", {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  date: DataTypes.DATE,
  time: DataTypes.DATE,
  image: DataTypes.STRING, // ✅ stores Cloudinary/local image URL
});

export default Event;
