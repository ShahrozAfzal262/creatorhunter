import List from "../models/List.js";

const mine = (req) => List.findOne({ _id: req.params.id, user: req.user.id });

export const getLists = async (req, res) =>
  res.json(await List.find({ user: req.user.id }).populate("items.creator").sort("-createdAt"));

export const createList = async (req, res) =>
  res.status(201).json(await List.create({ user: req.user.id, name: req.body.name || "My list" }));

export const addCreators = async (req, res) => {
  const list = await mine(req);
  if (!list) return res.status(404).json({ message: "List not found" });
  const have = new Set(list.items.map((i) => String(i.creator)));
  (req.body.creatorIds || []).forEach((id) => {
    if (!have.has(String(id))) list.items.push({ creator: id });
  });
  await list.save();
  res.json(list);
};

export const setStatus = async (req, res) => {
  const list = await mine(req);
  const item = list?.items.find((i) => String(i.creator) === req.body.creatorId);
  if (!item) return res.status(404).json({ message: "Creator is not in this list" });
  item.status = req.body.status;
  await list.save();
  res.json(list);
};
