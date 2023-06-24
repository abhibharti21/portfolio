import React, { useState } from "react";
import img from "../assets/vg.png";
import toast from "react-hot-toast";
import { motion } from "framer-motion";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../Firebase";

const Contact = () => {
  const animation = {
    form: {
      initial: {
        x: " -100%",
        opacity: 0,
      },
      whileInView: {
        x: "0%",
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: " 100%",
        opacity: 0,
      },
      whileInView: {
        y: "0%",
        opacity: 1,
      },
    },
  };

  const [inputs, setInputs] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });

  const [button, setButton] = useState(false);

  const changeHandler = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setButton(true);

    if (inputs.name === "" && inputs.email === "") {
      toast.error("Kindly Enter Your Message");
      setButton(false);
      return;
    }

    try {
      await addDoc(collection(db, "contacts"), { inputs });
      toast.success("Message Sent");
      setInputs({ name: "", email: "", message: "", number: "" });
      setButton(false);
    } catch {
      toast.error("Error");
      setButton(false);
    }
  };
  return (
    <div id="contact">
      <section>
        <motion.form {...animation.form} className="forms">
          <h2>Contact Me:</h2>
          <input
            type="text"
            placeholder="Enter Your Name ...."
            name="name"
            value={inputs.name}
            onChange={changeHandler}
            required
            autoComplete="on"
          />
          <input
            type="email"
            placeholder="Enter Your Email ...."
            name="email"
            value={inputs.email}
            onChange={changeHandler}
            required
            autoComplete="on"
          />

          <input
            type="number"
            placeholder="Enter Your Number ...."
            name="number"
            value={inputs.number}
            onChange={changeHandler}
            autoComplete="on"
            id="number"
          />

          <input
            type="text"
            placeholder="Enter Your Message ...."
            name="message"
            value={inputs.message}
            onChange={changeHandler}
            required
            autoComplete="on"
            id="message"
          />

          <motion.button
            disabled={button}
            className={button ? "disableBtn" : ""}
            {...animation.button}
            type="submit"
            onClick={(event) => submitHandler(event)}
          >
            Send
          </motion.button>
        </motion.form>
      </section>
      <aside>
        <img src={img} alt="" />
      </aside>
    </div>
  );
};

export default Contact;
