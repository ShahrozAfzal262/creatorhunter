import Creator from "../models/Creator.js";

export const getCreators = async (req, res) => {
  const { niche, platform, search, limit = 50, page = 1 } = req.query;
  const q = {};
  if (niche && niche !== "All") q.niche = niche;
  if (platform) q.platform = platform;
  if (search) q.handle = new RegExp(search.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i");
  const l = Math.min(+limit || 50, 100);
  res.json(await Creator.find(q).sort("-engagement").skip((+page - 1) * l).limit(l));
};
