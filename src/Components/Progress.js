function Progress({ index, numQuestions, maxPossiblePoints, points, answer }) {
  return (
    <header className="progress">
      <progress
        max={numQuestions}
        value={index + Number(answer !== null)}
      ></progress>

      <p>
        Question <strong> {index + 1}</strong>/ {numQuestions}
      </p>
      <p>
        <strong>{points} </strong>/{maxPossiblePoints}
      </p>
    </header>
  );
}

export default Progress;
