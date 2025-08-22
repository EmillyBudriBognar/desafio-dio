import * as http from "http";
import {
  getFilterEpisodes,
  listEpisodes,
} from "./controllers/episodes.controller";
import { Routes } from "./routes/routes";
import { HttpMethod } from "./constants/http/http-methods.enum";

export const app = async (
  request: http.IncomingMessage,
  response: http.ServerResponse
) => {
  const baseUrl = request.url?.split("?")[0];

  if (
    request.method === HttpMethod.GET &&
    baseUrl === Routes.LIST_ALL_PODCASTS
  ) {
    await listEpisodes(request, response);
  }

  if (request.method === HttpMethod.GET && baseUrl === Routes.FILTER_EPISODES) {
    await getFilterEpisodes(request, response);
  }
};
