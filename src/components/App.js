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
        {!isPlaying ? (
          <Intro isPlaying={isPlaying} setIsPlaying={setIsPlaying} />
        ) : (
          <Game setOperations={setOperations} />
        )}
        <Results />
      </main>
      {isPlaying ? <Score operations={operations} /> : null}
    </div>
  );
}

export default App;
