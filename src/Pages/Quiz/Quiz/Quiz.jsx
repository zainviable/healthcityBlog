import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Quiz = ({ quizData, setQuizData }) => {
  const navigate = useNavigate();

  // console.log("quizdata===", quizData);
  const [quizDetails, setQuizDetails] = useState({
    answerOf1a: quizData ? quizData.answerOf1a : "",
    answerOf1b: quizData ? quizData.answerOf1b : "",
    answerOf1c: quizData ? quizData.answerOf1c : "",
    answerOf1d: quizData ? quizData.answerOf1d : "",
    answerOf1e: quizData ? quizData.answerOf1e : "",
    answerOf2: quizData ? quizData.answerOf2 : "",
    answerOf3: quizData ? quizData.answerOf3 : "",
    answerOf4: quizData ? quizData.answerOf4 : "",
    answerOf5: quizData ? quizData.answerOf5 : "",
    answerOf6: quizData ? quizData.answerOf6 : "",
    answerOf7: quizData ? quizData.answerOf7 : "",
    answerOf8: quizData ? quizData.answerOf8 : "",
    answerOf9: quizData ? quizData.answerOf9 : "",
  });

  const questions = [
    {
      id: "1(a)",
      question:
        "I have stress, anxiety or other psychological conditions in my personal life, my family life, workplace, employment, business etc.",
      ansOf: "answerOf1a",
    },
    {
      id: "1(b)",
      question:
        "I want a safe space to talk how I am feeling and thinking about my difficulty.",
      ansOf: "answerOf1b",
    },
    {
      id: "1(c)",
      question:
        "I am not good enough. Or I feel that I am a failure or an embarrassment to myself, to my family or to my partner or my employer.",
      ansOf: "answerOf1c",
    },
    {
      id: "1(d)",
      question: "I need coping techniques to deal with my difficulties.",
      ansOf: "answerOf1d",
    },
    {
      id: "1(e)",
      question: "I am struggling to deal with a major change in my life.",
      ansOf: "answerOf1e",
    },
    {
      id: "2",
      question:
        "I have a difficulty or a conflict in my relationship with someone and I want to explore this deeper Or I am finding it difficult to start or keep a good relationship.",
      ansOf: "answerOf2",
    },
    {
      id: "3",
      question:
        "My partner and I, have communication or emotional difficulties in our relationship or marriage.",
      ansOf: "answerOf3",
    },
    {
      id: "4",
      question:
        "I am struggling to deal with a major change in my life, bereavement or grief and loss.",
      ansOf: "answerOf4",
    },
    {
      id: "5",
      question:
        "I can not stop thinking about what is bothering me. Or my mind keeps running around a million miles in my head or my thinking goes round like a vicious cycle. Or some of the beliefs, stories or the things I tell myself (or other people are telling me) are not helpful.",
      ansOf: "answerOf5",
    },
    {
      id: "6",
      question:
        "I have multiple difficulties to address, including childhood and current issues, abuses, bullying, trauma, trust, etc. I do not believe in or appreciate myself. I am worthless. I hate myself or my body. I have low self-esteem etc.",
      ansOf: "answerOf6",
    },
    {
      id: "7",
      question:
        "I have a long term health condition or physical health problem, including learning disability, back pain, migraine, ulcer, cancer, diabetes, etc that is affecting my emotional wellbeing, sleep, appetite, concentration, relationships, job, business, etc.",
      ansOf: "answerOf7",
    },
    {
      id: "8",
      question: "My difficulty is mainly work or employment related.",
      ansOf: "answerOf8",
    },
    {
      id: "9",
      question: "What I am looking for, is not among any of the above.",
      ansOf: "answerOf9",
    },
  ];

  const handleOptionChange = (questionAnswerOf, value) => {
    // console.log("qa===", questionAnswerOf);
    // console.log(" val===", value);
    setQuizDetails({ ...quizDetails, [questionAnswerOf]: value });
  };
  // console.log("qd===", quizDetails);

  const handleQuizSubmit = () => {
    setQuizData(quizDetails);
    navigate("/quiz/result");
  };

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="mt-8 pb-14 px-5 lg:px-24 min-h-screen">
      <div>
        {questions?.map((item) => (
          <div className="my-4 text-[18px] font-semibold" key={item.id}>
            <p className="">
              <span>{item.id}</span>: {item.question}
            </p>
            <div>
              <div className="flex items-center gap-[6px] my-1">
                <input
                  type="radio"
                  name={`quiz-${item.id}`}
                  className="radio radio-success"
                  id={`${item.id}-yes`}
                  onChange={() => handleOptionChange(item.ansOf, "Yes")}
                  checked={quizDetails[item.ansOf] === "Yes"}
                />
                <label htmlFor={`${item.id}-yes`}>Yes</label>
              </div>
              <div className="flex items-center gap-[6px]">
                <input
                  type="radio"
                  name={`quiz-${item.id}`}
                  className="radio radio-success"
                  id={`${item.id}-no`}
                  onChange={() => handleOptionChange(item.ansOf, "No")}
                  checked={quizDetails[item.ansOf] === "No"}
                />
                <label htmlFor={`${item.id}-no`}>No</label>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full md:w-2/5 lg:w-1/4 mx-auto mt-5">
        <button className="btn common-btn w-full" onClick={handleQuizSubmit}>
          Submit
        </button>
      </div>
    </div>
  );
};

export default Quiz;
