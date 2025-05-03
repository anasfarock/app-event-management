const { DataTypes } = require("sequelize");
const sequelize = require("../config/db");

const Event = sequelize.define("Event", {
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  date: DataTypes.DATE,
  time: DataTypes.DATE,
  image: DataTypes.STRING, // ✅ add this
});

module.exports = Event;
