import mongoose from "mongoose";

const awardSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  requirement: {
    type: Number,
    required: true,
  },
  progress: {
    type: Number,
    default: 0,
  },
});

export default mongoose.model("Award-management", awardSchema);
