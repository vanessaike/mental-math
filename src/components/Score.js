export default function Score({ operations, isPlaying, gameOver }) {
  const correctGuesses = operations.filter(
    (op) => +op.guess === +op.correctAnswer
  );
  return (
    <div className="score">
      <div className="score-wrapper">
        <p>
          <span className={gameOver ? `final-score` : ""}>
            {isPlaying ? operations.length : correctGuesses.length}
          </span>{" "}
          / 50
        </p>
      </div>
    </div>
  );
}
