import calculateAttributes from "../calculateAttributes";

const getAttributes = () => ({
  charisma: 1,
  constitution: 1,
  dexterity: 1,
  strength: 1,
  intelligence: 1
});

describe("calculateAttributes", () => {
  it("should not alter attributes if no bonuses are available", () => {
    const attributes = getAttributes();
    const newAttributes = calculateAttributes(attributes, []);
    expect(newAttributes.charisma).toBe(1);
    expect(newAttributes.constitution).toBe(1);
    expect(newAttributes.dexterity).toBe(1);
    expect(newAttributes.strength).toBe(1);
    expect(newAttributes.intelligence).toBe(1);
  });

  it("should add one charisma if bonus 'Leendet' is present", () => {
    const attributes = getAttributes();
    const bonuses = [{ name: "Leendet", attributes: { charisma: 1 } }];
    const newAttributes = calculateAttributes(attributes, bonuses);
    expect(newAttributes.charisma).toBe(2);
    expect(newAttributes.constitution).toBe(1);
    expect(newAttributes.dexterity).toBe(1);
    expect(newAttributes.strength).toBe(1);
    expect(newAttributes.intelligence).toBe(1);
  });
});
