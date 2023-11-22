import { useState } from "react";
import Question from "./Question";
import data from "./data";

function App() {
  const [question, Setquestions] = useState(data);

  return (
    <div className="container">
      <h3>سوالی برایتان پیش آمده؟</h3>
      <div className="info">
        {question.map((question) => {
          return <Question {...question} />;
        })}
      </div>
    </div>
  );
}

export default App;
