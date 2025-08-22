import { Request, Response } from "express";
import { getAllClubsService } from "../services/clubs.service";

export const getAllClubs = async (request: Request, response: Response) => {
  const data = await getAllClubsService();
  return response.status(data.statusCode).json(data.body);
};
