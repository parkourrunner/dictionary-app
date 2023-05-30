const path = require("path");
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const axios = require("axios");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
  })
);
app.use(morgan("combined"));

app.use(express.json());
app.use(express.static(path.join(__dirname, "..", "public")));

app.get("/search/:searchWord", async (req, res) => {
  await axios
    .get(
      `https://api.dictionaryapi.dev/api/v2/entries/en_US/${req.params.searchWord}`
    )
    .then((response) => {
      res.status(200).json(response.data[0]);
    })
    .catch((err) => {
      res.status(err.response.status).json({
        statusText: err.response.statusText,
        status: err.response.status,
        data: err.response.data,
      });
    });
});
app.get("/*", (req, res) => {
  res.status(404).json("I am here");
});

module.exports = app;
