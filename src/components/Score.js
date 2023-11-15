export default function Score({ operations }) {
  return (
    <div className="score">
      <div className="score-wrapper">
        <p>
          <span>{operations.length}</span> / 50
        </p>
      </div>
    </div>
  );
}
