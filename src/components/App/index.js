import React from "react";
import rules from "../../data";
import "./App.css";

function App() {
  const header = ["Rule", "Eslint", "React", "Airbnb"].map((text) => (
    <div key={text}>{text}</div>
  ));

  const cells = rules.ruleset.reduce((cells, rule) => {
    const eslintRule = rules.eslintRules[rule] || "-";
    const reactRule = rules.reactRules[rule] || "-";
    const airbnbRule = rules.airbnbRules[rule] || "-";

    cells.push(<div key={rule}>{rule}</div>);
    cells.push(<div key={`${rule}-eslint`}>{eslintRule.level}</div>);
    cells.push(<div key={`${rule}-react`}>{reactRule.level}</div>);
    cells.push(<div key={`${rule}-airbnb`}>{airbnbRule.level}</div>);

    return cells;
  }, []);

  return (
    <div className="app">
      <div className="grid">
        {header}
        {cells}
      </div>
    </div>
  );
}

export default App;
