import { Router } from "express";
import { getAllUsers, createUser } from "../controllers/userControllers";

const router = Router();

// /challenges
router.route("/").get(getAllUsers).post(createUser);

export default router;
