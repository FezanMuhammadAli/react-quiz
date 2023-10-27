function Options({ question }) {
  return (
    <div>
      <div className="options">
        {question.options.map((option) => {
          return (
            <button className="btn btn-option" key={option}>
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
