import Creator from "../models/Creator.js";
import Outreach from "../models/Outreach.js";
import sendMail from "../utils/mailer.js";

export const draft = async (req, res) => {
  const { creatorId, product = "our app" } = req.body;
  const c = await Creator.findById(creatorId);
  if (!c) return res.status(404).json({ message: "Creator not found" });
  const niche = c.niche.toLowerCase();
  const o = await Outreach.create({
    user: req.user.id,
    creator: c._id,
    subject: `Your ${niche} videos + ${product}`,
    body: `Hi ${c.handle},\n\nYour ${niche} videos are exactly the kind of content our users love. Would you make one video showing how you use ${product}? We pay per video, plus a bonus if it takes off.\n\nThanks!`,
  });
  res.status(201).json(await o.populate("creator", "handle niche email contact"));
};

export const send = async (req, res) => {
  const o = await Outreach.findOne({ _id: req.body.id, user: req.user.id }).populate("creator");
  if (!o) return res.status(404).json({ message: "Draft not found" });
  if (!o.creator.email) return res.status(400).json({ message: "This creator is DM only, no email found" });
  o.subject = req.body.subject ?? o.subject;
  o.body = req.body.body ?? o.body;
  await sendMail({ to: o.creator.email, subject: o.subject, text: o.body });
  o.status = "sent";
  o.sentAt = new Date();
  o.followUpAt = new Date(Date.now() + 3 * 864e5);
  await o.save();
  res.json(o);
};

export const mine = async (req, res) =>
  res.json(await Outreach.find({ user: req.user.id }).populate("creator", "handle niche").sort("-createdAt"));
