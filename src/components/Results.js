import Result from "./Result";
import Button from "./Button";

export default function Results({
  operations,
  setOperations,
  setIsPlaying,
  setGameOver,
}) {
  function handlePlayAgain() {
    setOperations([]);
    setIsPlaying(true);
    setGameOver(false);
  }

  return (
    <div className="results-screen">
      <div className="results-wrapper">
        <div className="operations-wrapper">
          <ul className="operations">
            {operations.map((op) => (
              <Result
                result={
                  +op.guess === +op.correctAnswer ? "correct" : "incorrect"
                }
                operation={op.operation}
                guess={op.guess}
                correctAnswer={op.correctAnswer}
              />
            ))}
          </ul>
        </div>
        <Button onClick={() => handlePlayAgain()}>play again</Button>
      </div>
    </div>
  );
}
