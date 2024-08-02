import React, { useState } from "react";
import "./CounterBanner.css"; // For styling
import ScrollTrigger from "react-scroll-trigger";
import CountUp from "react-countup";

const Counter = ({ label, value }) => {
  const [isCounterTrigger, setIsCounterTrigger] = useState(false);

  return (
    <section>
      <div className="counter-overlay py-20 flex items-center justify-center bg-[#84c440d7]">
        <ScrollTrigger
          onEnter={() => setIsCounterTrigger(true)}
          onExit={() => setIsCounterTrigger(false)}
        >
          <div className="px-5 lg:px-24 text-center off-white-text grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div>
              <p className="counter-heading">
                {isCounterTrigger && (
                  <CountUp start={0} end={90} duration={2} delay={0} />
                )}{" "}
                yrs+
              </p>
              <p className="font-medium">
                Core Therapy Team Combined Experience
              </p>
            </div>
            <div>
              <p className="counter-heading">
                {isCounterTrigger && (
                  <CountUp start={0} end={25} duration={2} delay={0} />
                )}
                +
              </p>
              <p className="font-medium">Professionals</p>
            </div>
            <div>
              <p className="counter-heading">
                {isCounterTrigger && (
                  <CountUp start={0} end={450} duration={2} delay={0} />
                )}
                +
              </p>
              <p className="font-medium">Happy Patients</p>
            </div>
            <div>
              <p className="counter-heading">
                {isCounterTrigger && (
                  <CountUp start={0} end={500} duration={2} delay={0} />
                )}
                +
              </p>
              <p className="font-medium">Completed Treatments</p>
            </div>
          </div>
        </ScrollTrigger>
      </div>
    </section>
  );
};

export default Counter;
