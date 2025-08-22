import { IncomingMessage, ServerResponse } from "http";
import { getAllPodcasts } from "../services/list-podcasts.service";
import { getPodcastsByName } from "../services/filter-podcasts.service";
import { ContentType } from "../constants/http/http-content-type.enum";
import { HttpStatusCode } from "../constants/http/http-status-code.enum";

export const listEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const content = await getAllPodcasts();

  response.writeHead(HttpStatusCode.OK, { "Content-Type": ContentType.JSON });
  response.write(JSON.stringify(content));
  response.end();
};

export const getFilterEpisodes = async (
  request: IncomingMessage,
  response: ServerResponse
) => {
  const queryString = request.url?.split("?podcast=")[1] || "";

  const content = await getPodcastsByName(queryString);

  response.writeHead(HttpStatusCode.OK, { "Content-Type": ContentType.JSON });
  response.write(JSON.stringify(content));
  response.end();
};
