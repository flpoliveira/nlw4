import * as React from "react";
import ExperienceBar from "./components/ExperienceBar";

import "./styles/global.css";

function App() {

  const [level, setLevel] = React.useState(1);
  const [experience, setExperience] = React.useState(0);

  React.useEffect(() => {
    if (experience >= level * 600) {
      setLevel(level + 1);
      setExperience(0);
    }
  }, [experience, level]);

  return (
    <div className="container">
      <ExperienceBar 
        maximun={600 * level}
        experience={experience}
        minimun={0}
      />
      <button 
        onClick={() => {
          setExperience(experience + 150);
        }}
        style={{
          marginTop: "3rem",
        }}
      >
        Aumenta ai + 150xp
      </button>
      <span>Level {level}</span>
    </div>
  );
}

export default App;
