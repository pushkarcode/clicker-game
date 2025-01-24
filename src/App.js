import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [score, setScore] = useState(0);
  const [prizes, setPrizes] = useState(0);

  useEffect(() => {
    axios.get("http://localhost:5000/userdata").then((response) => {
      setScore(response.data.totalScore);
      setPrizes(response.data.prizesWon);
    });
  }, []);

  const handleIncrement = () => {
    axios
      .post("http://localhost:5000/increment")
      .then((response) => {
        setScore(response.data.totalScore);
        setPrizes(response.data.prizesWon);
      })
      .catch((error) => console.error("Error incrementing score:", error));
  };

  return (
    <div className="App">
      <h1>Clicker Game</h1>
      <div className="score-display">
        <p>Score: {score}</p>
        <p className="prize-display">Prizes Won: {prizes}</p>
      </div>
      <button className="click-button" onClick={handleIncrement}>
        Click Me!
      </button>
    </div>
  );
}

export default App;
