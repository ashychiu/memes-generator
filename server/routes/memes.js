const express = require("express");
const fs = require("fs/promises");
const path = require("path");

const memesRouter = express.Router();
const MEMES_FILE = path.join(__dirname, "..", "data", "memes.json");

memesRouter.get("/", async (req, res, next) => {
  try {
    const raw = await fs.readFile(MEMES_FILE, "utf-8");
    res.status(200).json(JSON.parse(raw));
  } catch (err) {
    next(err);
  }
});

module.exports = memesRouter;
