const eslintConfig = require("./data/eslint.json");
const airbnbConfig = require("./data/airbnb.json");
const reactConfig = require("./data/react.json");

// Extract the rules section of a config.
function extractRules(config) {
  const rules = config.rules;
  return Object.keys(rules).reduce((keyMap, current) => {
    keyMap[current] = current;
    return keyMap;
  }, {});
}

// Combine all rules into a ruleset.
function fillRuleset(ruleset, rules) {
  rules.map((rule) => ruleset.add(rule));
}

const eslintRules = extractRules(eslintConfig);
const airbnbRules = extractRules(airbnbConfig);
const reactRules = extractRules(reactConfig);

const ruleset = new Set();

fillRuleset(ruleset, Object.keys(eslintRules));
fillRuleset(ruleset, Object.keys(airbnbRules));
fillRuleset(ruleset, Object.keys(reactRules));

// See which rules one ruleset has over another.
[...ruleset.keys()].forEach((key) => {
  if (!reactRules[key]) {
    console.log(key);
  }
});
