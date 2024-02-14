import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import "./Layout.css";
import Quiz from "../Pages/Quiz/Quiz/Quiz";
import Result from "../Pages/Quiz/Result/Result";

const QuizLayout = () => {
  const { pathname } = useLocation();
  const slugs = pathname.split("/");
  const path = slugs[slugs.length - 1];
  // console.log(path);

  const [quizData, setQuizData] = useState(null);
  // console.log("qdata===", quizData);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div>
      {/* question banner */}
      <div className="question-banner h-[320px] flex items-center justify-center bg-[#01143a74]">
        <h2 className="text-[40px] font-bold off-white-text">QUESTIONS</h2>
      </div>
      {/* question banner */}

      {/* quiz */}
      {path === "quiz" && (
        <Quiz quizData={quizData} setQuizData={setQuizData} />
      )}
      {/* quiz */}

      {/* result */}
      {path === "result" && <Result quizData={quizData} />}
      {/* result */}
    </div>
  );
};

export default QuizLayout;
