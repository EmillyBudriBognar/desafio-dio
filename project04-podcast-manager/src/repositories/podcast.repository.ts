import fs from "fs";
import path from "path";
import type { Podcast } from "../interfaces/podcast.interface";

const pathData = path.join(__dirname, "../repositories/podcasts.mock.json");

export const findPodcasts = async (
  podcastName?: string
): Promise<Podcast[]> => {
  const language = "utf-8";

  const rawData = fs.readFileSync(pathData, language);
  let jsonFile = JSON.parse(rawData);

  if (podcastName) {
    jsonFile = jsonFile.filter(
      (podcast: Podcast) => podcast.podcastName === podcastName
    );
  }
  return jsonFile;
};
