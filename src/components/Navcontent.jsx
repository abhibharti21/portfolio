import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/all";

const Navcontent = () => {
  const [menu, setMenu] = useState(false);
  const [navClassname, setNavclassname] = useState("headerNav");

  const navbarMenu = () => {
    if (navClassname === "headerNav") {
      setNavclassname("headerNav activeNavbar");
      setMenu(true);
    } else {
      setNavclassname("headerNav");
      setMenu(false);
    }
  };

  return (
    <>
      <h2>Abhishek Bharti</h2>
      <div className={navClassname}>
        <div className="work">
          <a href="#home" onClick={() => navbarMenu()}>
            Home
          </a>
          <a href="#work" onClick={() => navbarMenu()}>
            Work
          </a>
          <a href="#timeline" onClick={() => navbarMenu()}>
            Exeperience
          </a>
          <a href="#services" onClick={() => navbarMenu()}>
            Services
          </a>
          <a href="#contact" onClick={() => navbarMenu()}>
            Contact
          </a>
        </div>
        <div className="contact">
          <a href="mailto:bhartiabhishek287@gmail.com">
            <button>Email</button>
          </a>
          <a href="tel:+916299898323">
            <button>Call Me</button>
          </a>
        </div>
      </div>
      <button id="navBtn" onClick={() => navbarMenu()}>
        {menu ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>
    </>
  );
};

export default Navcontent;
