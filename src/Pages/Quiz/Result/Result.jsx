import React, { useEffect, useState } from "react";
import "./Result.css";
import { Link } from "react-router-dom";

const Result = ({ quizData }) => {
  // console.log("qdata===", quizData);

  if (!quizData) {
    // If quizData is null or undefined
    return (
      <div className="mt-8 mb-14 px-5 lg:px-24">
        <p className="result-description text-red-500">
          Questions data is missing.
        </p>
        <Link to="/quiz" className="btn common-btn my-3">
          Back to questions
        </Link>
      </div>
    );
  }

  const [results, setResults] = useState({
    result1: false,
    result2: false,
    result3: false,
    result4: false,
    result5: false,
    defaultResult: true,
  });

  const {
    answerOf1a,
    answerOf1b,
    answerOf1c,
    answerOf1d,
    answerOf1e,
    answerOf2,
    answerOf3,
    answerOf4,
    answerOf5,
    answerOf6,
    answerOf7,
    answerOf8,
    answerOf9,
  } = quizData;

  const y = "Yes";
  const n = "No";
  const b = "";

  useEffect(() => {
    if (
      answerOf1a === y &&
      answerOf1b === y &&
      answerOf1c === y &&
      answerOf1d === y &&
      answerOf1e === y &&
      answerOf2 === n &&
      answerOf3 === n &&
      answerOf4 === n &&
      answerOf5 === n &&
      answerOf6 === y &&
      answerOf7 === y &&
      answerOf8 === y
    ) {
      setResults({ ...results, defaultResult: false, result1: true });
    } else if (
      answerOf1a === y &&
      answerOf1b === y &&
      answerOf1c === y &&
      answerOf1d === y &&
      answerOf1e === y &&
      answerOf2 === n &&
      answerOf3 === n &&
      answerOf4 === n &&
      answerOf5 === n &&
      answerOf6 === n &&
      answerOf7 === y &&
      answerOf8 === y
    ) {
      setResults({ ...results, defaultResult: false, result2: true });
    } else if (
      answerOf1a === y &&
      answerOf1b === y &&
      answerOf1c === y &&
      answerOf1d === y &&
      answerOf1e === y &&
      answerOf2 === y &&
      answerOf3 === n &&
      answerOf4 === n &&
      answerOf5 === n &&
      answerOf6 === n &&
      answerOf7 === n &&
      answerOf8 === y
    ) {
      setResults({ ...results, defaultResult: false, result3: true });
    } else if (
      answerOf1a === y &&
      answerOf1b === y &&
      answerOf1c === y &&
      answerOf1d === y &&
      answerOf1e === y &&
      answerOf2 === y &&
      answerOf3 === y &&
      answerOf4 === y &&
      answerOf5 === y &&
      answerOf6 === y &&
      answerOf7 === y &&
      answerOf8 === y &&
      answerOf9 === y
    ) {
      setResults({ ...results, defaultResult: false, result4: true });
    } else if (
      answerOf1a === y &&
      answerOf1b === y &&
      answerOf1c === y &&
      answerOf1d === y &&
      answerOf1e === y &&
      answerOf3 === y
    ) {
      setResults({ ...results, defaultResult: false, result5: true });
    } else {
      setResults({ ...results, defaultResult: true });
    }
  }, []);

  useEffect(() => {
    document.documentElement.scrollTop = 0;
  }, []);

  return (
    <div className="mt-8 pb-14 px-5 lg:px-24 min-h-screen">
      {/* defaultResult */}
      {results?.defaultResult && (
        <p className="result-description">
          Thanks for contacting us! We will get in touch with you shortly.
        </p>
      )}
      {/* defaultResult */}

      {/* result1 */}
      {results?.result1 && (
        <p className="result-description">
          You may benefit from{" "}
          <span className="font-bold">
            Clinical Psychology, Counselling Psychology, or Health Psychology
          </span>{" "}
          because you might have answered YES to one or more of the items under
          '1' and also answered YES to one item '6'. The Clinical Psychologist,
          Counselling Psychologist, or Health Psychologist will explore more
          with you during your first session/appointment.{" "}
          <span className="font-bold">Book</span> Link to{" "}
          <a
            href="https://clinicalpsychology.healthbj-uk.org/booking"
            target="_blank"
            className="text-blue-500"
          >
            https://clinicalpsychology.healthbj-uk.org/booking
          </a>
        </p>
      )}
      {/* result1 */}

      {/* result2 */}
      {results?.result2 && (
        <p className="result-description">
          You may benefit from{" "}
          <span className="font-bold">
            Employee Assistance Counselling or Therapy
          </span>{" "}
          because you might have answered YES to one or more of the items under
          '1' and also answered YES to the item '8'. The{" "}
          <span className="font-bold">
            Employee Assistance Counsellor, Therapist, or Psychologist
          </span>{" "}
          will explore more with you during your first session/appointment.{" "}
          <span className="font-bold">Book</span> Link to{" "}
          <a
            href="https://eap.healthbj-uk.org/booking"
            target="_blank"
            className="text-blue-500"
          >
            https://eap.healthbj-uk.org/booking
          </a>
        </p>
      )}
      {/* result2 */}

      {/* result3 */}
      {results?.result3 && (
        <p className="result-description">
          You may benefit from <span className="font-bold">Counselling</span>{" "}
          because you might have answered YES to one or more of the items under
          '1' and also answered YES to item '2'. The Counsellor will explore
          more with you during your first session/appointment.{" "}
          <span className="font-bold">Book</span> Link to{" "}
          <a
            href="https://counselling.healthbj-uk.org/booking"
            target="_blank"
            className="text-blue-500"
          >
            https://counselling.healthbj-uk.org/booking
          </a>
        </p>
      )}
      {/* result3 */}

      {/* result4 */}
      {results?.result4 && (
        <p className="result-description">
          You may benefit from{" "}
          <span className="font-bold">Cognitive Behavioral Therapy (CBT)</span>{" "}
          because you might have answered YES to one or more of the items under
          '1' and also answered YES to item '5'. The CBT Therapist,
          Practitioner, or Counsellor will explore more with you during your
          first session/appointment. <span className="font-bold">Book</span>{" "}
          Link to{" "}
          <a
            href="https://cbt.healthbj-uk.org/booking"
            target="_blank"
            className="text-blue-500"
          >
            https://cbt.healthbj-uk.org/booking
          </a>
        </p>
      )}
      {/* result4 */}

      {/* result5 */}
      {results?.result5 && (
        <p className="result-description">
          You may benefit from{" "}
          <span className="font-bold">Couple Therapyor Couple Counselling</span>{" "}
          because you might have answered YES to one or more of the items under
          '1' and also answered YES to item '3'. The Couple Therapist,
          Practitioner or Counsellor will explore more with you during your
          first session/appointment. <span className="font-bold">Book</span>{" "}
          Link to{" "}
          <a
            href="https://coupletherapy.healthbj-uk.org/booking"
            target="_blank"
            className="text-blue-500"
          >
            https://coupletherapy.healthbj-uk.org/booking
          </a>
        </p>
      )}
      {/* result5 */}
    </div>
  );
};

export default Result;
