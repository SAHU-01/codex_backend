const mongoose = require("mongoose");
const { toJSON } = require("./plugins");

const eventSchema = new mongoose.Schema(
  {
    name: String,
    link: String,
    description: String,
    images: [],
    organizers: [],
    status: {
      type: String,
      enum: ["past", "live", "future"],
      default: "future",
    },
  },
  {
    timestamps: true,
  }
);

// add plugin that converts mongoose to json
eventSchema.plugin(toJSON);

module.exports = mongoose.model("event", eventSchema);
