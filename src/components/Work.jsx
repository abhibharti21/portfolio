import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import data from "../assets/data.json";
import { BsBoxArrowInUpRight } from "react-icons/all";

const Work = () => {
  return (
    <div id="work">
      <h2>WORK</h2>
      <section>
        <article>
          <Carousel
            infiniteLoop
            autoPlay
            showStatus={false}
            showArrows={false}
            interval={2000}
            showThumbs={false}
            showIndicators={false}
            emulateTouch={true}
          >
            {data.projects.map((elem) => {
              return (
                <div key={elem.title} className="workBox">
                  <img src={elem.imgSrc} alt={elem.title} />
                  <aside>
                    <h3>{elem.title}</h3>
                    <p>{elem.description}</p>
                    <a href={elem.url} target={"_blank"}>
                      visit website <BsBoxArrowInUpRight />
                    </a>
                  </aside>
                </div>
              );
            })}
          </Carousel>
        </article>
      </section>
    </div>
  );
};

export default Work;
