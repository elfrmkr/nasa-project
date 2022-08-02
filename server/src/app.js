const express = require("express");
const cors = require("cors");

const app = express();

const planetsRouter = require("./routes/planets/planets.router");

app.use(
  cors({
    origin: "http://localhost:3001",
  })
);
app.use(express.json());
app.use(planetsRouter);

module.exports = app;
