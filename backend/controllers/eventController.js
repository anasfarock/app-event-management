const { Event } = require("../models");

const createEvent = async (req, res) => {
  try {
    const { title, description, date, time, image } = req.body;

    if (!title || !description || !date || !time || !image) {
      return res
        .status(400)
        .json({ success: false, message: "All fields are required" });
    }

    const event = await Event.create({ title, description, date, time, image });
    res.status(201).json({ success: true, event });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

module.exports = { createEvent };
