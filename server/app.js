import path from "path";
import express from "express";
import axios from "axios";
import morgan from "morgan";
import itemRoutes from "./routes/item.js";

const app = express();

app.use(morgan("combined"));

app.use(express.json());
app.use("/api/item", itemRoutes);

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

export default app;
