import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
function App() {
  return (
    <>
      <main>
        <section className="container grid-box">
          <div className="text-box">
            <h3>Questions And Answers About Login</h3>
          </div>
          <div className="question-box">
            {data.map((question) => {
              return (
                <SingleQuestion
                  key={question.id}
                  {...question}
                ></SingleQuestion>
              );
            })}
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
