import { Router } from "express";
import { challenge } from "../controllers/challengeController";

const router = Router();

// /challenges
router.route("/").get(challenge.getAll).post(challenge.create);

router.route("/:id").get(challenge.getById).put(challenge.upDateById);

export default router;
