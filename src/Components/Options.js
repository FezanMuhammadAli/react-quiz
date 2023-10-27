function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  return (
    <div>
      <div className="options">
        {question.options.map((option, index) => {
          return (
            <button
              className={`btn btn-option ${index === answer ? "answer" : ""} ${
                hasAnswered
                  ? index === question.correctOption
                    ? "correct"
                    : "wrong"
                  : ""
              }`}
              key={option}
              disabled={answer !== null}
              onClick={() =>
                dispatch({
                  type: "newAnswer",
                  payload: index,
                })
              }
            >
              {option}
              {console.log("option", option)}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Options;
