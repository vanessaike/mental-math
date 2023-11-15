import { useState } from "react";
import Game from "./Game";
import Intro from "./Intro";
import Results from "./Results";
import Score from "./Score";

function App() {
  const [operations, setOperations] = useState([]);
  const [isPlaying, setIsPlaying] = useState(false);
  const [gameOver, setGameOver] = useState(false);
  return (
    <div className="App">
      <main>
        {!isPlaying && !gameOver ? (
          <Intro isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        ) : isPlaying && !gameOver ? (
          <Game
            operations={operations}
            setOperations={setOperations}
            setIsPlaying={setIsPlaying}
            setGameOver={setGameOver}
          />
        ) : (
          <Results
            operations={operations}
            setOperations={setOperations}
            setIsPlaying={setIsPlaying}
            setGameOver={setGameOver}
          />
        )}
      </main>
      {isPlaying || gameOver ? (
        <Score
          operations={operations}
          isPlaying={isPlaying}
          gameOver={gameOver}
        />
      ) : null}
    </div>
  );
}

export default App;
