require("dotenv").config();
const express = require("express");
const cors = require("cors");

const memesRouter = require("./routes/memes");

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({ origin: process.env.CLIENT_URL || "*" }));
app.use(express.json());

app.use("/memes", memesRouter);

app.use((err, req, res, next) => {
  console.error(err);
  res.status(500).json({ error: "Internal server error" });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
