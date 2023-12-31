import React from "react";
import data from "../assets/data.json";

const Timeline = () => {
  return (
    <div id="timeline">
      <div className="timelineBox">
        {data.projects.map((item, index) => {
          return (
            <div
              key={index}
              className={`timelineItem ${
                index % 2 === 0 ? "leftline" : "rightline"
              }`}
            >
              <div>
                <h2>{item.date}</h2>
                <p>{item.title}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Timeline;
