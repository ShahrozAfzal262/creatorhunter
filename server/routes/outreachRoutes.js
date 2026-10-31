import { Router } from "express";
import { draft, send, mine } from "../controllers/outreachController.js";
import auth from "../middleware/auth.js";

const r = Router();
r.use(auth);
r.get("/", mine);
r.post("/draft", draft);
r.post("/send", send);
export default r;
