import { findAllClubs } from "../repositories/club.repository";
import { ok } from "../utils/http-helper";

export const getAllClubsService = async () => {
  const data = await findAllClubs();
  return await ok(data);
};
