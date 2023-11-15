export default function Result({ result, operation, guess, correctAnswer }) {
  return (
    <li className={`operation operation-${result}`}>
      {result === "correct" ? (
        `${operation} = ${guess}`
      ) : (
        <>
          <p>{`${operation} = ${guess}`}</p>
          <p className="correct-answer">correct answer: {correctAnswer}</p>
        </>
      )}
    </li>
  );
}
