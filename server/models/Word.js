import mongoose from "mongoose";

const WordSchema = new mongoose.Schema(
  {
    word_id: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Word", WordSchema);
