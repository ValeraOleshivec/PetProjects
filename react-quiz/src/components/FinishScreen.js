function FinishScreen({ points, maxPossiblePoints, highscore, dispatch }) {
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPossiblePoints}
      </p>
      <p className="highscore">(Highscrore:{highscore})</p>
      <button
        className="btn btn-ui"
        onClick={() => dispatch({ type: "reset" })}
      >
        Restart Quiz
      </button>
    </>
  );
}

export default FinishScreen;
