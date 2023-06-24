import React, { useState } from "react";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

const Info = () => {
  const [counterOn, setCounterOn] = useState(false);

  return (
    <ScrollTrigger
      onEnter={() => setCounterOn(true)}
      onExit={() => setCounterOn(false)}
    >
      <div className="info">
        <article>
          <p>
            <span>
              {counterOn && (
                <CountUp start={0} end={50} duration={1} delay={0} />
              )}
            </span>
            <span>+</span>
          </p>
          <p>Projects Done</p>
        </article>

        <article>
          <p>Contact </p>
          <p>bhartiabhishek287@gmail.com</p>
        </article>
      </div>
    </ScrollTrigger>
  );
};

export default Info;
