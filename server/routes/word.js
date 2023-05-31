import express from "express";
import { addWord, deleteWord, getWord } from "../controllers/Word.js";

const router = express.Router();

router.post("/", addWord);
router.delete("/:id", deleteWord);
router.get("/:word_id", getWord);

export default router;
