export default attributeName => {
  switch (attributeName.toLowerCase()) {
    case "charisma":
      return "karisma";
    case "constitution":
      return "uthållighet";
    case "dexterity":
      return "teknik";
    case "strength":
      return "styrka";
    case "intelligence":
      return "spelförståelse";
  }

  return "";
};
