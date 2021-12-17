const express = require("express");
const memesRouter = express.Router();
const fs = require("fs");

const readData = () => {
  const memesData = fs.readFileSync("./data/memes.json");
  return JSON.parse(memesData);
};

memesRouter.get("/", (req, res) => {
  const memesData = readData();
  console.log(memesData);
  return res.status(200).json(memesData);
});

module.exports = memesRouter;
