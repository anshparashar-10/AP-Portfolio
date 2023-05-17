import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import LogoTitle from "../../assets/images/ALogo.png";
import Logo from "./Logo";
import "./index.scss";

const Home = () => {
  const [letterClass, setLetterClass] = useState("text-animate");

  const nameArray = "nsh".split("");
  const jobArray = "Web Developer".split("");
  const interestArray = "Problem Solving".split("");
  const enthusiastArray = "Enthusiast".split("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={letterClass}>H</span>
            <span className={`${letterClass} _12`}>i,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'m</span>
            <img
              src={LogoTitle}
              alt="JavaScript Developer Name, Web Developer Name"
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={22}
            />
            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={interestArray}
              idx={22}
            />

            <br />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={enthusiastArray}
              idx={22}
            />
          </h1>
          <h2>
            Full Stack Developer / MERN and Game Developer Enthusiast / Fast
            Learner
          </h2>
          <Link to="/contact" className="flat-button">
            CONTACT ME
          </Link>
          <a
            href="https://drive.google.com/file/d/1VHg5RujqiI6DeUXfLrrDwDlDNKfFjuy1/view?usp=sharing"
            target={"_blank"}
            className="flat-button-resume"
          >
            RESUME
          </a>
        </div>
        <Logo />
      </div>

      <Loader type="pacman" />
    </>
  );
};

export default Home;
