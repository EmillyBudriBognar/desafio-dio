import { Request, Response } from "express";
import {
  createPlayerService,
  getAllPlayersService,
  getPlayerByIdService,
  deletePlayerService,
  updatePlayerService,
} from "../services/players.service";
import { badRequest } from "../utils/http-helper";
import type { Statistics } from "../interfaces/statistics.interface";

export const getAllPlayers = async (request: Request, response: Response) => {
  const httpResponse = await getAllPlayersService();
  return response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const getPlayerById = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);
  const httpResponse = await getPlayerByIdService(id);
  return response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const createPlayer = async (request: Request, response: Response) => {
  const data = request.body;
  const httpResponse = await createPlayerService(data);
  if (!httpResponse) {
    const result = await badRequest(new Error("Player data is missing."));
    return response.status(result.statusCode).json(result.body);
  }
  return response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const updatePlayer = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);
  const data: Statistics = request.body;
  const httpResponse = await updatePlayerService(id, data);
  if (!httpResponse) {
    const result = await badRequest(new Error("Player data is missing."));
    return response.status(result.statusCode).json(result.body);
  }
  return response.status(httpResponse.statusCode).json(httpResponse.body);
};

export const deletePlayer = async (request: Request, response: Response) => {
  const id = parseInt(request.params.id);
  const httpResponse = await deletePlayerService(id);
  return response.status(httpResponse.statusCode).json();
};
