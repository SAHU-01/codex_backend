const router = require("express").Router();
const Member = require("../models/Member");

// GET /members
router.get("/", async (req, res) => {
  try {
    const members = await Member.find({});
    res.send(members);
  } catch (error) {
    res.status(500).send(error);
  }
});

// GET /members/:id
router.get("/:id", async (req, res) => {
  try {
    const member = await Member.findById(req.params.id);
    res.status(200).json(member);
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
