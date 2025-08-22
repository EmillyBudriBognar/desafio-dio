<h1>Desafio de projeto: Mario Kart.JS</h1>

  <table>
        <tr>
            <td>
                <img src="./docs/header.gif" alt="Mario Kart" width="200">
            </td>
            <td>
                <b>Objetivo:</b>
                <p>O desafio foi replicar a lógica demonstrada nas videoaulas, uma simulação de corridas de Mario Kart, levando em consideração as regras e mecânicas abaixo. Também foram implementadas melhorias e os extras passados pelo professor.</p>
            </td>
        </tr>
    </table>

<h2>Players</h2>
      <table style="border-collapse: collapse; width: 800px; margin: 0 auto;">
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Mario</p>
                <img src="./docs/mario.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 4</p>
                <p>Manobrabilidade: 3</p>
                <p>Poder: 3</p>
            </td>
             <td style="border: 1px solid black; text-align: center;">
                <p>Peach</p>
                <img src="./docs/peach.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 2</p>
            </td>
              <td style="border: 1px solid black; text-align: center;">
                <p>Yoshi</p>
                <img src="./docs/yoshi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 3</p>
            </td>
        </tr>
        <tr>
            <td style="border: 1px solid black; text-align: center;">
                <p>Bowser</p>
                <img src="./docs/bowser.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 5</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Luigi</p>
                <img src="./docs/luigi.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 3</p>
                <p>Manobrabilidade: 4</p>
                <p>Poder: 4</p>
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Donkey Kong</p>
                <img src="./docs/dk.gif" alt="Mario Kart" width="60" height="60">
            </td>
            <td style="border: 1px solid black; text-align: center;">
                <p>Velocidade: 2</p>
                <p>Manobrabilidade: 2</p>
                <p>Poder: 5</p>
            </td>
        </tr>
    </table>

<p></p>

<h3>🕹️ Regras & mecânicas:</h3>

<b>Jogadores:</b>

<input type="checkbox" id="jogadores-item" />
<label for="jogadores-item">O Computador irá receber dois personagens escolhidos aleatoriamente de uma lista de personagens (objetos) em um array. Estes, irão disputar uma corrida para ver quem sai vencedor.</label>

<br>
<b>Pistas:</b>

<ul>
  <li><input type="checkbox" id="pistas-1-item" /> <label for="pistas-1-item">Durante 5 rodadas, os personagens irão correr em uma pista aleatória.</label></li>
  <li><input type="checkbox" id="pistas-2-item" /> <label for="pistas-2-item">A cada rodada, será sorteado um tipo de pista (bloco) que pode ser uma reta, curva ou confronto.</label>
    <ul>
      <li><input type="checkbox" id="pistas-2-1-item" /> <label for="pistas-2-1-item">Caso a pista seja uma RETA, o jogador deve rolar um dado de 6 lados e somar seu valor ao atributo VELOCIDADE. Quem vencer, ganha um ponto.</label></li>
      <li><input type="checkbox" id="pistas-2-2-item" /> <label for="pistas-2-2-item">Caso a pista seja uma CURVA, o jogador deve rolar um dado de 6 lados e somar seu valor ao atributo MANOBRABILIDADE. Quem vencer, ganha um ponto.</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Caso a pista seja um CONFRONTO, o jogador deve rolar um dado de 6 lados e somar seu valor ao atributo PODER. Quem perder, perde um ponto.</label></li>
      <li><input type="checkbox" id="pistas-2-3-item" /> <label for="pistas-2-3-item">Nenhum jogador pode ter pontuação negativa (valores abaixo de 0).</label></li>
    </ul>
  </li>
</ul>

<br>
<b>Condição de vitória:</b>

<input type="checkbox" id="vitoria-item" />
<label for="vitoria-item">Ao final, vence quem acumulou mais pontos.</label>

<br>
<b>Extras:</b>

<input type="checkbox" id="pistas-2-3-item-extra-1" />
<label for="pistas-2-3-item-extra-1">Sorteio aleatório do ataque, caso seja feito com um casco 🐢 (-1 ponto) ou com uma bomba 💣 (-2 pontos).</label>

<input type="checkbox" id="pistas-2-3-item-extra-2" />
<label for="pistas-2-3-item-extra-2">O vencedor pode ganhar um turbo 🚀 (+1 ponto) aleatoriamente.</label>

<!--START_SECTION:footer-->
<br/>
<br/>
<section align="center">
  <p>
    ⌨️ Made by Ana Valeska in Dio's Course
  </p>
</section>
<br />
<br />

<!--END_SECTION:footer-->
