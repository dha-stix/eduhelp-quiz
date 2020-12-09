import React from "react";
import "./Questions.css";

const Questions = ({ question, answer, show, setShow }) => {
  const handleClick = (e) => {
    e.preventDefault();
    show ? setShow(false) : setShow(true);
  };

  return (
    <div className="quests">
      <p className="question">{question}</p>
      <p className="answer">{show && answer}</p>
      <button onClick={handleClick} id="view-answer">
        {show ? "Hide Answer" : "View Answer"}
      </button>
    </div>
  );
};

export default Questions;
