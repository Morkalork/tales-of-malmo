import generateAttributes from "../generateAttributes";

describe("generateAttributes", () => {
  it("should not accept a total of under 5", () => {
    expect(() => generateAttributes(4)).toThrow();
  });

  it("should generate an attribute set with 1 on each for a total of 5", () => {
    const attributes = generateAttributes(5);
    expect(attributes.charisma).toBe(1);
    expect(attributes.dexterity).toBe(1);
    expect(attributes.constitution).toBe(1);
    expect(attributes.strength).toBe(1);
    expect(attributes.intelligence).toBe(1);
  });

  it("should generate one attribute with more than one for a total of 6", () => {
    const attributes = generateAttributes(6);
    const attributeValues = Object.values(attributes);
    expect(attributeValues.some(val => val > 1)).toBeTruthy();
  });
});
