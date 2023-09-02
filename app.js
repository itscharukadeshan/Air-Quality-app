/** @format */

import express from "express";
import cors from "cors";

const app = express();

app.get("/health", (req, res) => {
  res.send("ok");
});

app.get("/version", (req, res) => {
  res.send("1");
});

app.use(cors());

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

app.use(express.static("dist"));

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
