import Item from "../models/Item.js";

export const addItem = async (req, res, next) => {
  const newItem = new Item({ itemId: req.user.id, ...req.body });
  try {
    const savedItem = await newItem.save();
    res.status(200).json(savedItem);
  } catch (e) {
    next(e);
  }
};

export const deleteItem = async (req, res, next) => {
  try {
    await Item.findByIdAndDelete(req.param.id);
    res.status(200).json("Item has been deleted");
  } catch (e) {
    return next(createError(403, "You can delete only your Item!"));
  }
};

export const getItem = async (req, res, next) => {
  try {
    console.log(req.params);
    const item = await Item.find({ itemId: req.params.itemId });
    res.status(200).json(item);
  } catch (e) {
    next(e);
  }
};
