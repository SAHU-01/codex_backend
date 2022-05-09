const router = require("express").Router();
const Event = require("../models/Event");

// GET /events
router.get("/", async (req, res) => {
  try {
    const events = await Event.find({});
    res.send(events);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET /events/:id
router.get("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    res.status(200).json(event);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
