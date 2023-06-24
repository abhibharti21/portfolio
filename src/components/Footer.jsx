import React from "react";
import { FaFacebookF, FaLinkedinIn, FiGithub } from "react-icons/all";
import me from "../assets/logo.png";

const Footer = () => {
  return (
    <footer>
      <div>
        <img src={me} alt="Abhishek Bharti" />
        <h2>Abhishek Bharti</h2>
        <p>(React JS developer)</p>
      </div>
      <aside>
        <h3 className="socialHeading">Social Platform Links</h3>
        <div className="socialLinks">
          <a
            href="https://www.linkedin.com/in/abhishek-bharti-3322b1189/"
            target="_blank"
          >
            <FaLinkedinIn />
          </a>
          <a href="https://github.com/abhibharti21" target="_blank">
            <FiGithub />
          </a>
          <a
            href="https://www.facebook.com/profile.php?id=100041314941490"
            target="_blank"
          >
            <FaFacebookF />
          </a>
        </div>
      </aside>
    </footer>
  );
};

export default Footer;
