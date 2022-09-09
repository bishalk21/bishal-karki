import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import me from "../assets/svg/me.svg";
import mut from "../assets/svg/muted.svg";
import pl from "../assets/sound/preloader.mp3";
import { Navigation } from "./navbar/Navigation";
import ReactGa from "react-ga";

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const hoverEffect =
  typeof window !== `undefined` ? require("hover-effect").default : null;

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const HomePage = () => {
  const [speakerState, setSpeakerState] = useState("muted");
  const [isToggleOpen, setIsToggleOpen] = useState(false);

  const refScroll = useRef(null);
  let lscroll = "";

  useEffect(() => {
    ReactGa.initialize("UA-199999999-1");
    ReactGa.pageview(window.location.pathname + window.location.search);
    if (!refScroll.current) return;

    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      getDirection: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.5,
      getSpeed: true,
      smartphone: {
        smooth: true,
      },
      tablet: {
        smooth: true,
      },
    });

    // update locomotive scroll
    window.addEventListener("load", () => {
      let image = document.querySelector("img");
      // @ts-ignore
      const isLoaded = !image.complete && !image.naturalHeight !== 0;

      lscroll.update();
    });

    // header cursor
    const cursor = document.querySelector(".cursor");
    window.addEventListener("mousemove", (e) => {
      cursor.setAttribute(
        "style",
        "top: " + e.pageY + "px; left: " + e.pageX + "px;"
      );
    });

    console.clear();
    console.log.apply(console, [
      "%c Designed and Developed by Bisshal Karki %c %c🚀 %c\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
      "color: #fff; background: #242424; padding:5px 0 5px 5px;",
      "background: #242424; padding:5px 0",
      "background: #242424; padding:5px 5px 5px 0",
    ]);
    console.log.apply(console, [
      "%c Thanks for stopping by, I’m currently looking to a new team of creative designers and developers.\n",
      "color: #fff; background: #8000ff; padding:5px 0;",
    ]);
  }, []);

  const handleSpeaker = () => {
    const audio = document.querySelector("#audioPlayer");
    if (speakerState === "muted") {
      setSpeakerState("unmuted");
      audio.pause();
    } else {
      setSpeakerState("muted");
      audio.play();
    }
  };

  function toggleBodyScroll(isToggleOpen) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true);
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false);
    }
  }

  return (
    <div data-scroll-container>
      <audio loop id="audioPlayer" autoPlay style={{ display: "none" }}>
        <source src={pl} type="audio/mp3" />
      </audio>
      <motion.div
        data-scroll
        data-scroll-sticky
        data-scroll-target="#menu-target"
        animate={{
          top: "-100vh",
          transition: {
            ...transition,
            delay: 10,
          },
        }}
        className="preloader"
      >
        <div className="preloader__wrapper">
          <motion.div
            initial={{ x: -10, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                ...transition,
              },
            }}
            className="preloader__left"
          >
            <img src={me} alt="bishal logo" />
          </motion.div>
          <motion.div
            initial={{ x: 10, opacity: 0 }}
            animate={{
              x: 0,
              opacity: 1,
              transition: {
                ...transition,
              },
            }}
            className="preloader__right"
          >
            <p className="preloader__text">
              HTML <i className="fab fa-html5"></i>
            </p>
            <p className="preloader__text">
              CSS/SCSS <i className="fab fa-css3-alt"></i>
            </p>
            <p className="preloader__text">
              JAVASCRIPT <i className="fab fa-js-square"></i>
            </p>

            <p className="preloader__text">
              REACT JS <i className="fab fa-react"></i>
            </p>
            <p className="preloader__text">
              Express &and; Node JS <i className="fab fa-node-js"></i>
            </p>
            <p className="preloader__text">
              Mongo DB <i className="fas fa-database"></i>
            </p>
          </motion.div>
        </div>
      </motion.div>
      <div className="cursor"></div>
      <Navigation
        isOpen={isToggleOpen}
        toggleOpen={() => toggleBodyScroll(isToggleOpen)}
      />
      <div className="header-wrapper">
        <header className="header">
          <div className="header__hero">
            <div className="header__hero--heading">
              <span>turning ideas into </span> <br />
              <span>real life </span>
              <span className="header__hero--heading-gradient">products </span>
              <br />
              <span>is my calling.</span>
            </div>
            <a
              data-scroll-to
              className="header__hero--cta"
              href="#sectionProjects"
            >
              VIEW PROJECTS
            </a>
          </div>
        </header>
        <div className="header__footer">
          <div className="header__footer--left">
            <div className="speaker">
              <div
                onClick={handleSpeaker}
                // className={${"speaker__toggle"} ${
                //     speakerState === "unmuted"
                //       ? `${"speaker__toggle--anim"}`
                //       : ``
                //   }}
                //   className=`{"speaker__toggle"
                //   speakerState === "unmuted" ? "speaker__toggle--anim" : ""}`
              >
                &nbsp;
              </div>
              <div className="speaker__muted">
                <img src={mut} alt="muted icon" />
              </div>
              <div className="speaker__unmuted">
                <svg
                  width="14"
                  height="11"
                  viewBox="0 0 15 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="0.599976"
                    y="1.06665"
                    width="1.4"
                    height="10"
                    fill="#F2F2F2"
                    className="rect1-anim"
                  />
                  <rect
                    x="9"
                    y="1.06665"
                    width="1.4"
                    height="10"
                    fill="#F2F2F2"
                    className="rect2-anim"
                  />
                  <rect
                    x="4.79999"
                    y="1.06665"
                    width="1.4"
                    height="10"
                    fill="#F2F2F2"
                    className="rect3-anim"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className="header__footer--right">
            <a
              href="https://github.com/bishalk21"
              rel="noopener"
              target="_blank"
            >
              👾 GH
            </a>
            <a
              href="https://twitter.com/k_bishal21"
              rel="noopener"
              target="_blank"
            >
              🐦 TW
            </a>
            <a
              href="https://www.linkedin.com/in/bishalk21/"
              rel="noopener"
              target="_blank"
            >
              💼 LD
            </a>
            <a
              href="https://www.instagram.com/k_bishal02/"
              rel="noopener"
              target="_blank"
            >
              {" "}
              📸 IN
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
