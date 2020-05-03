const eslintConfig = require("./eslint.json");
const airbnbConfig = require("./airbnb.json");
const reactConfig = require("./react.json");

// Extract the rules section of an eslint config into a keymap.
function extractRules(config) {
  const rules = config.rules;
  return Object.keys(rules).reduce((keyMap, current) => {
    if (rules[current][0] === "off") {
      return keyMap;
    }

    keyMap[current] = { id: current, level: rules[current][0] };
    return keyMap;
  }, {});
}

// Combine all rules into a single, sorted ruleset.
function createRuleset(ruleKeymaps) {
  const ruleset = new Set();

  ruleKeymaps.forEach((keymap) => {
    Object.keys(keymap).forEach((key) => ruleset.add(key));
  });

  return Array.from(ruleset).sort();
}

// Extract rules.
const eslintRules = extractRules(eslintConfig);
const airbnbRules = extractRules(airbnbConfig);
const reactRules = extractRules(reactConfig);

// Find full list of rules.
const ruleset = createRuleset([eslintRules, airbnbRules, reactRules]);

exports.ruleset = ruleset;
exports.eslintRules = eslintRules;
exports.airbnbRules = airbnbRules;
exports.reactRules = reactRules;
