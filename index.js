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

app.listen(5050, () => {
  console.log("Backend is running");
});
