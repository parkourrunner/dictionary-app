import mongoose from "mongoose";

const ItemSchema = new mongoose.Schema(
  {
    itemId: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Item", ItemSchema);
