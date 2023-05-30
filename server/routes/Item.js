import express from "express";
import { addItem, deleteItem, getItem } from "../controllers/Item.js";

const router = express.Router();

router.post("/", addItem);
router.delete("/:id", deleteItem);
router.get("/:itemId", getItem);

export default router;
