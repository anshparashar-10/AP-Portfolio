import "./index.scss";
import LogoS from "../../assets/images/ALogo.png";
import leetcodeLogo from "../../assets/images/LeetCode_logo_black.png";
import linkdinLogo from "../../assets/images/linkdin.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import {
  faHome,
  faUser,
  faEnvelope,
  faScrewdriverWrench,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
          {/* <img className="sub-logo" src={LogoSubtitle} alt="slobodan" /> */}
        </Link>
        <nav>
          <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
          </NavLink>
          <NavLink activeclassname="active" className="about-link" to="/about">
            <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="skills-link"
            to="/skills"
          >
            <FontAwesomeIcon icon={faScrewdriverWrench} color="#4d4d4e" />
          </NavLink>

          <NavLink
            activeclassname="active"
            className="contact-link"
            to="/contact"
          >
            <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
          </NavLink>
        </nav>
        <ul>
          <li>
            <a
              href="https://www.linkedin.com/in/ansh-parashar/"
              target="_blank"
              rel="noreferrer"
            >
              {/* <FontAwesomeIcon icon={faLinkedin} color="#b9b9b9" /> */}
              <img src={linkdinLogo} width="24" alt="linkdin" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/anshparashar-10"
              target="_blank"
              rel="noreferrer"
            >
              <FontAwesomeIcon icon={faGithub} color="#b9b9b9" />
              {/* <img src={linkdinLogo} width="24" alt="linkdin" /> */}
            </a>
          </li>
          <li>
            <a
              href="https://leetcode.com/Ansh-Parashar/"
              target="_blank"
              rel="noreferrer"
            >
              <img src={leetcodeLogo} width="24" alt="leetcode" />
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
