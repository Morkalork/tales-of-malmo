export default (attributes, bonuses) => {
  if (bonuses.length === 0) {
    return attributes;
  }

  const newAttributes = { ...attributes };
  bonuses.forEach(({ attributes: bonusAttributes }) => {
    if (bonusAttributes.charisma) {
      newAttributes.charisma += bonusAttributes.charisma;
    }
    if (bonusAttributes.constitution) {
      newAttributes.constitution += bonusAttributes.constitution;
    }
    if (bonusAttributes.dexterity) {
      newAttributes.dexterity += bonusAttributes.dexterity;
    }
    if (bonusAttributes.strength) {
      newAttributes.strength += bonusAttributes.strength;
    }
    if (bonusAttributes.intelligence) {
      newAttributes.intelligence += bonusAttributes.intelligence;
    }
  });

  return newAttributes;
};
