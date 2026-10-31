import mongoose from "mongoose";

const outreachSchema = new mongoose.Schema(
  {
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    creator: { type: mongoose.Schema.Types.ObjectId, ref: "Creator", required: true },
    subject: String,
    body: String,
    status: { type: String, enum: ["draft", "sent", "followup", "replied"], default: "draft" },
    sentAt: Date,
    followUpAt: Date,
  },
  { timestamps: true }
);

export default mongoose.model("Outreach", outreachSchema);
