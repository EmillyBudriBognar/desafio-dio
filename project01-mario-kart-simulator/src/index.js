async function pickTwoRandomRacers() {
  const players = [
    {
      name: "Peach",
      velocidade: 3,
      manobrabilidade: 4,
      poder: 2,
      pontos: 0,
    },
    {
      name: "Yoshi",
      velocidade: 2,
      manobrabilidade: 4,
      poder: 3,
      pontos: 0,
    },
    {
      name: "Mario",
      velocidade: 4,
      manobrabilidade: 3,
      poder: 3,
      pontos: 0,
    },
    {
      name: "Luigi",
      velocidade: 3,
      manobrabilidade: 4,
      poder: 4,
      pontos: 0,
    },
    {
      name: "Bowser",
      velocidade: 5,
      manobrabilidade: 2,
      poder: 5,
      pontos: 0,
    },
    {
      name: "Donkey Kong",
      velocidade: 2,
      manobrabilidade: 2,
      poder: 5,
      pontos: 0,
    },
  ];

  const choosePlayers = [...players].sort(() => Math.random() - 0.5);
  return choosePlayers.slice(0, 2);
}

async function rollDice() {
  return Math.floor(Math.random() * 6) + 1;
}

async function getRandomBlock() {
  let random = Math.random();
  let result;

  switch (true) {
    case random < 0.33:
      result = "Reta";
      break;
    case random < 0.66:
      result = "Curva";
      break;
    default:
      result = "Confronto";
  }

  return result;
}

async function logRollResult(characterName, block, diceResult, attribute) {
  console.log(
    `${characterName} 🎲 rolou um dado de ${block} ${diceResult} + ${attribute} = ${
      diceResult + attribute
    }`
  );
}

async function playRaceEngine(character1, character2) {
  for (let round = 1; round <= 5; round++) {
    console.log(`🏁 Rodada ${round}`);

    let block = await getRandomBlock();
    console.log(`Bloco: ${block}`);

    let diceResultPlayer1 = await rollDice();
    let diceResultPlayer2 = await rollDice();

    let totalTestSkillPlayer1 = 0;
    let totalTestSkillPlayer2 = 0;

    if (block === "Reta") {
      totalTestSkillPlayer1 = diceResultPlayer1 + character1.velocidade;
      totalTestSkillPlayer2 = diceResultPlayer2 + character2.velocidade;

      await logRollResult(
        character1.name,
        "velocidade",
        diceResultPlayer1,
        character1.velocidade
      );
      await logRollResult(
        character2.name,
        "velocidade",
        diceResultPlayer2,
        character2.velocidade
      );

      if (totalTestSkillPlayer1 === totalTestSkillPlayer2) {
        console.log("Houve um empate! Nenhum ponto foi ganho.");
      }
    }

    if (block === "Curva") {
      totalTestSkillPlayer1 = diceResultPlayer1 + character1.manobrabilidade;
      totalTestSkillPlayer2 = diceResultPlayer2 + character2.manobrabilidade;

      await logRollResult(
        character1.name,
        "manobrabilidade",
        diceResultPlayer1,
        character1.manobrabilidade
      );
      await logRollResult(
        character2.name,
        "manobrabilidade",
        diceResultPlayer2,
        character2.manobrabilidade
      );

      if (totalTestSkillPlayer1 === totalTestSkillPlayer2) {
        console.log("Houve um empate! Nenhum ponto foi ganho.");
      }
    }

    if (block === "Confronto") {
      let powerResultPlayer1 = diceResultPlayer1 + character1.poder;
      let powerResultPlayer2 = diceResultPlayer2 + character2.poder;

      console.log(`${character1.name} confrontou ${character2.name}! 🥊`);

      await logRollResult(
        character1.name,
        "poder",
        diceResultPlayer1,
        character1.poder
      );
      await logRollResult(
        character2.name,
        "poder",
        diceResultPlayer2,
        character2.poder
      );

      const hullOrBomb = Math.random() < 0.5 ? "Hull" : "Bomb";

      if (powerResultPlayer1 > powerResultPlayer2) {
        if (hullOrBomb === "Hull") {
          console.log(
            `${character1.name} venceu o confronto! ${character2.name} perdeu 1 ponto 🐢`
          );
          character2.pontos--;
        } else if (hullOrBomb === "Bomb") {
          console.log(
            `${character1.name} venceu o confronto! ${character2.name} perdeu 2 pontos 🐢`
          );
          character2.pontos -= 2;
        }

        if (Math.random() < 0.5) {
          console.log(`${character1.name} ganhou um turbo de 1 ponto 🚀`);
          character1.pontos++;
        }

        character2.pontos = Math.max(0, character2.pontos);
      }

      if (powerResultPlayer2 > powerResultPlayer1) {
        if (hullOrBomb === "Hull") {
          console.log(
            `${character2.name} venceu o confronto! ${character1.name} perdeu 1 ponto 🐢`
          );
          character1.pontos--;
        } else if (hullOrBomb === "Bomb") {
          console.log(
            `${character2.name} venceu o confronto! ${character1.name} perdeu 2 pontos 🐢`
          );
          character1.pontos -= 2;
        }

        if (Math.random() < 0.5) {
          console.log(`${character2.name} ganhou um turbo de 1 ponto 🚀`);
          character2.pontos++;
        }

        character1.pontos = Math.max(0, character1.pontos);
      }

      if (powerResultPlayer1 === powerResultPlayer2) {
        console.log("Confronto empatado! Nenhum ponto foi perdido.");
      }
    }

    if (totalTestSkillPlayer1 > totalTestSkillPlayer2) {
      console.log(`${character1.name} marcou um ponto!`);
      character1.pontos++;
    } else if (totalTestSkillPlayer2 > totalTestSkillPlayer1) {
      console.log(`${character2.name} marcou um ponto!`);
      character2.pontos++;
    }

    console.log("-------------------------------------");
  }
}

async function rounds() {
  switch (race) {
    case "reta":
      return rollDice() + player1.velocidade;
  }
}

async function declareWinner(character1, character2) {
  console.log("Resultado final:");
  console.log(`${character1.name}: ${character1.pontos} ponto(s)`);
  console.log(`${character2.name}: ${character2.pontos} ponto(s)`);

  if (character1.pontos > character2.pontos) {
    console.log(`\n${character1.name} venceu a corrida! Parabéns! 🏆`);
  } else if (character2.pontos > character1.pontos) {
    console.log(`\n${character2.name} venceu a corrida! Parabéns! 🏆`);
  } else {
    console.log("A corrida terminou em empate.");
  }
}

(async function main() {
  const selectedPlayers = await pickTwoRandomRacers();
  console.log(
    `🏁🚨 Corrida entre ${selectedPlayers[0].name} e ${selectedPlayers[1].name} começando...\n`
  );
  await playRaceEngine(selectedPlayers[0], selectedPlayers[1]);
  await declareWinner(selectedPlayers[0], selectedPlayers[1]);
})();
