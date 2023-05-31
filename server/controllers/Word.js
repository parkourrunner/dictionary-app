import Word from "../models/Word.js";

export const addWord = async (req, res, next) => {
  const newWord = new Word({ word_id: req.user.id, ...req.body });
  try {
    const savedWord = await newWord.save();
    res.status(200).json(savedWord);
  } catch (e) {
    next(e);
  }
};

export const deleteWord = async (req, res, next) => {
  try {
    await Word.findByIdAndDelete(req.param.id);
    res.status(200).json("Word has been deleted");
  } catch (e) {
    return next(createError(403, "You can delete only your Word!"));
  }
};

export const getWord = async (req, res, next) => {
  try {
    console.log(req.params);
    const word = await Word.find({ word_id: req.params.word_id });
    res.status(200).json(word);
  } catch (e) {
    next(e);
  }
};
