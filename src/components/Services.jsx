import React from "react";
import { motion } from "framer-motion";
import { MdDesignServices, AiFillIeCircle } from "react-icons/all";

const Services = () => {
  const animate = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      x: "-100%",
      opacity: 0,
    },
    two: {
      y: "100%",
      opacity: 0,
    },
    three: {
      x: "100%",
      opacity: 0,
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animate.whileInView}
          initial={animate.one}
        >
          <h3>6+</h3>
          <p>Months Training</p>
        </motion.div>
        <motion.div
          className="serviceBox2"
          whileInView={animate.whileInView}
          initial={animate.two}
        >
          <AiFillIeCircle />
          <span>Web Development</span>
        </motion.div>
        <motion.div
          className="serviceBox3"
          whileInView={animate.whileInView}
          initial={animate.three}
        >
          <MdDesignServices />
          <span>Web Designer</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
