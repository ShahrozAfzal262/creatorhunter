import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import User from "../models/User.js";

const out = (u) => ({
  token: jwt.sign({ id: u._id }, process.env.JWT_SECRET, { expiresIn: "7d" }),
  user: { id: u._id, name: u.name, email: u.email },
});

export const register = async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password || password.length < 6)
    return res.status(400).json({ message: "Name, email and a password of 6+ characters are required" });
  if (await User.findOne({ email: email.toLowerCase() }))
    return res.status(409).json({ message: "This email is already registered" });
  const user = await User.create({ name, email, password: await bcrypt.hash(password, 10) });
  res.status(201).json(out(user));
};

export const login = async (req, res) => {
  const user = await User.findOne({ email: (req.body.email || "").toLowerCase() });
  if (!user || !(await bcrypt.compare(req.body.password || "", user.password)))
    return res.status(401).json({ message: "Wrong email or password" });
  res.json(out(user));
};

export const me = async (req, res) => {
  const u = await User.findById(req.user.id).select("name email");
  if (!u) return res.status(401).json({ message: "Please log in again" });
  res.json({ id: u._id, name: u.name, email: u.email });
};
