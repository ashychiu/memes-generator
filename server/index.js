const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  })
);
const memesRouter = require("./routes/memes");

app.use("/memes", memesRouter);

app.listen(8080, () => {
  console.log(`Server listening on 8080`);
});
