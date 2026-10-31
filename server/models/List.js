import mongoose from "mongoose";

export const STATUSES = ["Found", "Emailed", "Follow-up sent", "Replied", "Negotiating", "Onboarded"];

const listSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    name: { type: String, required: true },
    items: [
      {
        creator: { type: mongoose.Schema.Types.ObjectId, ref: "Creator" },
        status: { type: String, enum: STATUSES, default: "Found" },
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model("List", listSchema);
