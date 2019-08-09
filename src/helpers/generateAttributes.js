import random from "./random";

export default total => {
  if (total < 5) {
    throw new Error(
      "This enemy as the wrong total, please don't make rookie misstakes like this!"
    );
  }
  const attributeKeys = [
    "charisma",
    "dexterity",
    "constitution",
    "strength",
    "intelligence"
  ];
  const attributes = {};
  attributeKeys.forEach(attributeKey => {
    attributes[attributeKey] = 1;
  });

  while (total > 5) {
    const randomKey = attributeKeys[random(0, attributeKeys.length - 1)];
    attributes[randomKey]++;
    total--;
  }

  return attributes;
};
