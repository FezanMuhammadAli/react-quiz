function NextButton({ dispatch, answer }) {
  if (answer !== null) {
    return (
      <button
        className="btn btn-ui"
        onClick={() =>
          dispatch({
            type: "nextQuestion",
          })
        }
      >
        Next
      </button>
    );
  }
  return <div></div>;
}

export default NextButton;
