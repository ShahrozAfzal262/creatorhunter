import { Router } from "express";
import { getLists, createList, addCreators, setStatus } from "../controllers/listController.js";
import auth from "../middleware/auth.js";

const r = Router();
r.use(auth);
r.get("/", getLists);
r.post("/", createList);
r.post("/:id/add", addCreators);
r.patch("/:id/status", setStatus);
export default r;
