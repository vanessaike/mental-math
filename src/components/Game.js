import { useState } from "react";
import Button from "./Button";

export default function Game({
  operations,
  setOperations,
  setIsPlaying,
  setGameOver,
}) {
  const signs = ["+", "-", "*"];
  const [guess, setGuess] = useState("");
  const [operation, setOperation] = useState(generateOperation());

  function generateRandomNum() {
    return Math.floor(Math.random() * 100 + 1);
  }

  function generateOperation() {
    const randomSign = signs[Math.floor(Math.random() * 3)];
    return `${generateRandomNum()} ${randomSign} ${generateRandomNum()}`;
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    if (!guess) return alert("please, make a guess");
    if (operations.length >= 50) {
      setGameOver(true);
      setIsPlaying(false);
    } else {
      setOperations((op) => [
        ...op,
        { operation, guess, correctAnswer: eval(operation) },
      ]);
      setOperation(generateOperation());
      setGuess("");
    }
  }

  return (
    <div className="game-screen">
      <div className="game-wrapper">
        <p className="operation">{operation}</p>
        <form onSubmit={handleFormSubmit}>
          <input
            type="number"
            className="user-guess"
            value={guess}
            onChange={(e) => setGuess(e.target.value)}
          />
          <Button>guess</Button>
        </form>
      </div>
    </div>
  );
}
