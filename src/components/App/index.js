import React from "react";
import rules from "../../data";
import styles from "./App.module.css";

function App() {
  const header = ["Rule", "React", "Eslint", "Airbnb"].map((text) => (
    <div className={styles.header} key={text}>
      {text}
    </div>
  ));

  const cells = rules.ruleset.reduce((cells, rule) => {
    const reactRule = rules.reactRules[rule]?.level || "-";
    const eslintRule = rules.eslintRules[rule]?.level || "-";
    const airbnbRule = rules.airbnbRules[rule]?.level || "-";

    cells.push(<div key={rule}>{rule}</div>);
    cells.push(<div key={`${rule}-react`}>{reactRule}</div>);
    cells.push(<div key={`${rule}-eslint`}>{eslintRule}</div>);
    cells.push(<div key={`${rule}-airbnb`}>{airbnbRule}</div>);

    return cells;
  }, []);

  return (
    <div className={styles.app}>
      <div className={styles.grid}>
        {header}
        {cells}
      </div>
    </div>
  );
}

export default App;
