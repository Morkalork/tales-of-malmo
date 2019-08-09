import random from "./random";
import { ATTRIBUTES, MAX_ATTRIBUTE } from "../constants";
import format from "string-format";

function getPlayers(players, enemies, isPlayersTurn) {
  const player = players[random(0, players.length - 1)];
  const enemy = enemies[random(0, enemies.length - 1)];
  let player1, player2;

  if (isPlayersTurn) {
    player1 = player;
    player2 = enemy;
  } else {
    player1 = enemy;
    player2 = player;
  }

  return { player1, player2 };
}

export default (players, enemies, numberOfRounds, actions, inactions) => {
  let round = 0;
  const sequences = [];

  while (round < numberOfRounds) {
    const isPlayersTurn = random(0, 1) === 0;
    const { player1, player2 } = getPlayers(players, enemies, isPlayersTurn);

    const currentAttribute = ATTRIBUTES[random(0, ATTRIBUTES.length - 1)];
    const player1Attribute = player1.attributes[currentAttribute];
    const getsAction =
      random(player1Attribute, MAX_ATTRIBUTE) >
      (player1Attribute + MAX_ATTRIBUTE) / 2;
    if (!getsAction) {
      const line = format(
        inactions[currentAttribute][random(0, player1Attribute)],
        { player1: player1.name }
      );
      sequences.push({
        line,
        score: 0,
        attribute: currentAttribute
      });
    } else {
      const player2Attribute = player2.attributes[currentAttribute];
      const total = player1Attribute + player2Attribute;
      const roll = random(0, total);
      const formatData = { player1: player1.name, player2: player2.name };
      const player1HasWon = roll <= player1Attribute;
      let actionIndex;
      let line;
      let score = 0;

      if (player1HasWon) {
        score += isPlayersTurn ? 1 : -1;
        actionIndex = random(0, player1Attribute - 1);
      } else {
        score += isPlayersTurn ? -1 : 1;
        actionIndex = random(0, player2Attribute - 1);
      }
      const action = actions[currentAttribute][actionIndex];
      line = format(action, formatData);
      sequences.push({
        line,
        score,
        attribute: currentAttribute
      });
    }

    round++;
  }

  return sequences;
};
