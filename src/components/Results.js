export default function Results() {
  return (
    <div className="results-screen hidden">
      <div className="results-wrapper">
        <div className="operations-wrapper">
          <ul className="operations">
            <li className="operation operation-correct">10 + 5 = 15</li>
            <li className="operation operation-incorrect">
              <p>10 + 50 = 29</p>
              <p className="correct-answer">correct answer: 60</p>
            </li>
            <li className="operation operation-incorrect">
              <p>33 - 10 = 22</p>
              <p className="correct-answer">correct answer: 23</p>
            </li>
          </ul>
        </div>

        <button className="main-btn">play again</button>
      </div>
    </div>
  );
}
