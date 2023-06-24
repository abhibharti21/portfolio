import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import {
  BsArrowUpRight,
  BsChevronDown,
  HiOutlineDocumentDownload,
} from "react-icons/all";
import me from "../assets/logo.png";
import resume from "../assets/AbhishekResume.pdf";

const Home = () => {
  const animation = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: "0",
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: "0",
        opacity: 1,
      },
    },
  };

  return (
    <div id="home">
      <section>
        <div className="animate">
          <motion.h1 {...animation.h1}>
            Hi , I am <br /> Abhishek Bharti
          </motion.h1>

          <Typewriter
            options={{
              strings: [
                "A Front-End Developer",
                "A Web Designer",
                " A Creator",
              ],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "animatedText",
            }}
          />
          <div className="linkBtn">
            <a href="mailto:bhartiabhishek287@gmail.com">Hire me</a>
            <a href="#work" className="secondLink">
              Projects <BsArrowUpRight />
            </a>
            <a href={resume} download={true}>
              Download resume <HiOutlineDocumentDownload />
            </a>
          </div>
        </div>
      </section>
      <section>
        <img src={me} alt="Abhishek Bharti" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
