import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import app from "./app.js";

const PORT = process.env.PORT || 8000;
const server = http.createServer(app);
dotenv.config();

const connect = () => {
  mongoose
    .connect(process.env.MOGOURI)
    .then(() => {
      console.log("CONNECTED to DB");
    })
    .catch((err) => {
      throw err;
    });
};
async function startServer() {
  server.listen(PORT, () => {
    connect();
    console.log(`Listening on port ${PORT}...`);
  });
}

startServer();
