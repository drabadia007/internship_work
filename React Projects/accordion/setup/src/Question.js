import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ title, info }) => {
  const [showAnswer, setShowAnswer] = useState(false);
  return (
    <>
      <div className="q-box">
        <div className="f-box">
          <p>{title}</p>
          <button className="btn" onClick={() => setShowAnswer(!showAnswer)}>
            {showAnswer ? (
              <AiOutlineMinus></AiOutlineMinus>
            ) : (
              <AiOutlinePlus></AiOutlinePlus>
            )}
          </button>
        </div>
        <div className={`content ${showAnswer && "show-content"}`}>
          <h4>{info}</h4>
        </div>
      </div>
    </>
  );
};

export default Question;
