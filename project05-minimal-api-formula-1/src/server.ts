import fastify from "fastify";
import cors from "@fastify/cors";

interface RouteParams {
  id: string;
}

const server = fastify({ logger: true });

server.register(cors, {
  origin: "*",
});

const teams = [
  { id: 1, name: "McLaren", base: "Woking, United Kingdom" },
  { id: 2, name: "Mercedes", base: "Brackley, United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "Milton Keynes, United Kingdom" },
];

const drivers = [
  { id: 1, name: "Max Verstappen", team: "Red Bull Racing" },
  { id: 2, name: "Lewis Hamilton", team: "Ferrari" },
  { id: 3, name: "Lando Norris", team: "McLaren" },
];

server.get("/teams", async (request, response) => {
  response.type("application/json").code(200);
  return { teams };
});

server.get<{ Params: RouteParams }>("/teams/:id", async (request, response) => {
  const id = parseInt(request.params.id);
  const team = teams.find((team) => team.id === id);

  if (!team) {
    response.type("application/json").code(404);
    return { message: "Team Not Found." };
  }
  response.type("application/json").code(200);
  return { team };
});

server.get("/drivers", async (request, response) => {
  response.type("application/json").code(200);
  return { drivers };
});

server.get<{ Params: RouteParams }>(
  "/drivers/:id",
  async (request, response) => {
    const id = parseInt(request.params.id);
    const driver = drivers.find((driver) => driver.id === id);
    if (!driver) {
      response.type("application/json").code(404);
      return { message: "Driver Not Found." };
    }
    response.type("application/json").code(200);
    return { driver };
  }
);

const port = Number(process.env.PORT) || 3333;

server.listen({ port }, () => {
  console.log(`Server running on port ${port}`);
});
