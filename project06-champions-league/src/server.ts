import { createApp } from "./app";

const app = createApp();

const port = Number(process.env.PORT) || 3333;

app.listen({ port }, () => {
  console.log(`Server running on port ${port}`);
});
