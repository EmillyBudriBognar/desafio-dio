# Podcast Manager

### Descrição

Um app ao estilo netflix, onde possa centralizar diferentes episódios de podcasts separados por categoria

### Domínio

Podcasts feitos em vídeo

### Features

- Filtrar episódios por nome de podcast

## Como

#### Feature:

- Listar todos os podcasts.

### Como vou implementar:

GET: retorna lista de episódios.

response:

```js
[
  {
    podcastName: "ICONIC Network",
    episode: "Como Evoluir Sua Arte Mais Rapidamente",
    videoId: "zi1-C0HTtrc",
    cover: "https://i.ytimg.com/vi/zi1-C0HTtrc/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=zi1-C0HTtrc&t=6s",
    categories: ["arte", "Trabalho", "desenho", "ilustração"],
  },
  {
    podcastName: "ICONIC Network",
    episode: "ICONIC Live - Como Tropeçar e Levantar: A Arte de Não Desistir",
    videoId: "3tNDqWvqjao",
    cover: "https://i.ytimg.com/vi/3tNDqWvqjao/maxresdefault.jpg",
    link: "https://www.youtube.com/watch?v=3tNDqWvqjao",
    categories: [
      "arte",
      "Trabalho",
      "desenho",
      "ilustração",
      "saúde",
      "mentalidade",
      "esforço",
    ],
  },
];
```

GET: retorna lista de episódios baseado no parâmetro (nome do podcast) enviado pelo cliente.
