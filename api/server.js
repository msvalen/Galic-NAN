const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

const authRoutes = require("./controllers/auth");
const userRoutes = require("./controllers/users");
const stocksBoughtRoutes = require("./controllers/stocksBought");

app.use("/auth", authRoutes);
app.use("/users", userRoutes);
app.use("/stocksBought", stocksBoughtRoutes);

app.get("/", (req, res) => {
  res.status(200).send("Hello World!");
});

module.exports = app;
