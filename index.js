const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cors = require("cors");
require("./connection");

const membersRoute = require("./routes/members");
const eventsRoute = require("./routes/events");

dotenv.config();
app.use(express.json());
app.use(cors());

app.use("/members", membersRoute);
app.use("/events", eventsRoute);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log("Backend is running");
});
