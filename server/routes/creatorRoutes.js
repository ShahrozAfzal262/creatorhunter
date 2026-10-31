import { Router } from "express";
import { getCreators } from "../controllers/creatorController.js";
import auth from "../middleware/auth.js";

const r = Router();
r.get("/", auth, getCreators);
export default r;
