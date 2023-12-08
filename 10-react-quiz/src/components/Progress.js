function Progress({
  index,
  points,
  numQuestions,
  answer,
  totalPossiblePoints,
}) {
  return (
    <>
      <header className="progress">
        <progress
          max={numQuestions}
          value={index + Number(answer !== null)}
        ></progress>
        <p>
          Question <strong>{index + 1}</strong>/ {numQuestions}
        </p>
        <p>
          <strong>{points}</strong>/ {totalPossiblePoints}
        </p>
      </header>
    </>
  );
}

export default Progress;
