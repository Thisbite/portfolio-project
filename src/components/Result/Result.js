import React from "react";
import Transcript from "./Transcript";

const Result = props => {
  return (
    <>
      <h2>Quiz Results</h2>
      <p>{props.message}</p>
      <p>Vous avez obtenu {props.score}% de la performance attendue</p>
      <button className="btn-action" onClick={props.restart}>
        {props.passQuiz ? "Let Go" : "Reprendre"}
      </button>
      {props.passQuiz && <Transcript transcript={props.transcript} />}
    </>
  );
};

export default Result;
