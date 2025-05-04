import sequelize from "../config/db.js";
import User from "./User.js";
import Event from "./Event.js";

const syncDB = async () => {
  await sequelize.sync({ alter: true });
  console.log("Database synced.");
};

export { sequelize, User, Event, syncDB };
