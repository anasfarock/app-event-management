const sequelize = require("../config/db");
const User = require("./User");

const syncDB = async () => {
  await sequelize.sync({ alter: true });
  console.log("Database synced.");
};

module.exports = { sequelize, User, syncDB };
