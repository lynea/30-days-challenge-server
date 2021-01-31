import { Router } from "express";
import {
  getAllChallenges,
  getChallengesById,
  createChallenge,
  deleteChallenge,
} from "../controllers/challengeController";

const router = Router();

// /challenges
router.route("/").get(getAllChallenges).post(createChallenge);

router.route("/:id").get(getChallengesById).put(deleteChallenge);

export default router;
