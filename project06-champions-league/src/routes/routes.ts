import { Router } from "express";
import {
  createPlayer,
  deletePlayer,
  getAllPlayers,
  getPlayerById,
  updatePlayer,
} from "../controllers/players.controller";
import { getAllClubs } from "../controllers/clubs.controller";

export const router = Router();

router.get("/players", getAllPlayers);
router.get("/players/:id", getPlayerById);
router.post("/players", createPlayer);
router.delete("/players/:id", deletePlayer);
router.patch("/players/:id", updatePlayer);

router.get("/clubs", getAllClubs);
