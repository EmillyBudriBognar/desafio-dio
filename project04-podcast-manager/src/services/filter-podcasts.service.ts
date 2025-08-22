import type { IncomingMessage } from "http";
import { findPodcasts } from "../repositories/podcast.repository";

export const getPodcastsByName = async (podcastName: string) => {
  const data = await findPodcasts(podcastName);

  return data;
};
