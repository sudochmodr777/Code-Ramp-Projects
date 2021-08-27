function verifyCoffeeOrder(size, creamer, sweetener) {
  if (!(size === "small" || size === "large")) return "Not a valid size";
  if (!(creamer === "milk" || creamer === "half and half")) return "Not a valid creamer";
  if (!(sweetener === "sugar" || sweetener === "splenda")) return "Not a valid sweetener";
  else return `A ${size} cup of coffee with ${creamer} and ${sweetener}.`;
}
