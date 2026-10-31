import mongoose from "mongoose";

const creatorSchema = new mongoose.Schema({
  handle: { type: String, required: true, unique: true },
  platform: { type: String, default: "TikTok" },
  niche: { type: String, required: true },
  followers: Number,
  engagement: Number,
  medianViews: Number,
  contact: { type: String, enum: ["Email", "DM only"], default: "Email" },
  email: String,
  bio: String,
});

export default mongoose.model("Creator", creatorSchema);
