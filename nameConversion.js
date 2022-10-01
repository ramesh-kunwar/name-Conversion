// Select input box
const input = document.querySelector("input");
const convertBtn = document.querySelector("#convert-btn");
const paragraphs = document.querySelectorAll("p");

// case selectors
const camelCase = document.querySelector("#camel-case");
const pascalCase = document.querySelector("#pascal-case");
const snakeCase = document.querySelector("#snake-case");
const screamingSnakeCase = document.querySelector("#screaming-snake-case");
const kebabCase = document.querySelector("#kebab-case");
const screamingKebabCase = document.querySelector("#screaming-kebab-case");

// INPUT CHANGE EVENT
input.addEventListener("keypress", (e) => {
  paragraphs.forEach((p) => {
    p.textContent = e.target.value;
  });
});

// CONVERT BUTTON EVENT
convertBtn.addEventListener("click", () => {
  let text = input.value;
  camelCase.textContent = camalize(text);
  pascalCase.textContent = toPascalCase(text);
  snakeCase.textContent = toSnakeCase(text);
  screamingSnakeCase.textContent = toScreamingSnakeCase(text);
  kebabCase.textContent = toKebabCase(text);
  screamingKebabCase.textContent = toScreamingKebabCase(text);
});

// *****************CASE CONVERTION LOGIC****************/
// camel case
function camalize(str) {
  return str.toLowerCase().replace(/[^a-zA-Z0-9]+(.)/g, function (match, chr) {
    return chr.toUpperCase();
  });
}

// pascal case
const toPascalCase = (str) =>
  (str.match(/[a-zA-Z0-9]+/g) || [])
    .map((w) => `${w.charAt(0).toUpperCase()}${w.slice(1)}`)
    .join("");

// snake case
const toSnakeCase = (string) => {
  return string
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toLowerCase())
    .join("_");
};

// screaming snake case
const toScreamingSnakeCase = (string) => {
  return string
    .replace(/\W+/g, " ")
    .split(/ |\B(?=[A-Z])/)
    .map((word) => word.toUpperCase())
    .join("_");
};

// kebab case
const toKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toLowerCase())
    .join("-");

// screaming kebab case
const toScreamingKebabCase = (str) =>
  str &&
  str
    .match(/[A-Z]{2,}(?=[A-Z][a-z]+[0-9]*|\b)|[A-Z]?[a-z]+[0-9]*|[A-Z]|[0-9]+/g)
    .map((x) => x.toUpperCase())
    .join("-");
