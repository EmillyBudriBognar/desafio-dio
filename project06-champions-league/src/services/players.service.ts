import type { Player } from "../interfaces/player.interface";
import type { Statistics } from "../interfaces/statistics.interface";
import {
  createPlayer,
  deletePlayer,
  findAllPlayers,
  findPlayerById,
  updatePlayer,
} from "../repositories/player.repository";
import {
  badRequest,
  created,
  noContent,
  notFound,
  ok,
} from "../utils/http-helper";

export const getAllPlayersService = async () => {
  const data = await findAllPlayers();

  if (!data) {
    return await notFound({
      error: "Player not found.",
    });
  }
  return await ok(data);
};

export const getPlayerByIdService = async (id: number) => {
  const data = await findPlayerById(id);

  if (!data) {
    return await notFound({
      error: "Player not found.",
    });
  }
  return await ok(data);
};

export const createPlayerService = async (player: Player) => {
  if (!player || Object.keys(player).length === 0) {
    return badRequest(new Error("Player data is missing."));
  }
  await createPlayer(player);
  return created();
};

export const updatePlayerService = async (id: number, data: Statistics) => {
  const player = await findPlayerById(id);

  if (!player) {
    return await notFound({
      error: "Player not found.",
    });
  }
  const response = await updatePlayer(id, data);
  return await ok(response);
};

export const deletePlayerService = async (id: number) => {
  const data = await findPlayerById(id);

  if (!data) {
    return await notFound({
      error: "Player not found.",
    });
  }

  await deletePlayer(data.id);
  return await noContent();
};
