import { findPodcasts } from "../repositories/podcast.repository";

export const getAllPodcasts = async () => {
  const data = await findPodcasts();

  return data;
};
