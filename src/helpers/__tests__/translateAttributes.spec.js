import translateAttributes from "../translateAttributes";

describe("translateAttributes", () => {
  it("should be able to translate 'charisma'", () => {
    const translation = translateAttributes("charisma");
    expect(translation).toBe("karisma");
  });
  it("should be able to translate 'constitution'", () => {
    const translation = translateAttributes("constitution");
    expect(translation).toBe("uthållighet");
  });
  it("should be able to translate 'dexterity'", () => {
    const translation = translateAttributes("dexterity");
    expect(translation).toBe("teknik");
  });
  it("should be able to translate 'strength'", () => {
    const translation = translateAttributes("strength");
    expect(translation).toBe("styrka");
  });
  it("should be able to translate 'intelligence'", () => {
    const translation = translateAttributes("intelligence");
    expect(translation).toBe("spelförståelse");
  });
});
