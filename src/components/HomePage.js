import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import me from "../assets/svg/me.svg";
import { Navigation } from "./navbar/Navigation";
import ReactGa from "react-ga";

const locomotiveScroll =
  typeof window !== `undefined` ? require("locomotive-scroll").default : null;

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const HomePage = () => {
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

    // console.clear();
    console.log("👋🏾 Hi there! 👋🏾");
  }, []);

  function toggleBodyScroll(isToggleOpen) {
    if (isToggleOpen === false) {
      setIsToggleOpen(true);
    } else if (isToggleOpen === true) {
      setIsToggleOpen(false);
    }
  }

  return (
    <div data-scroll-container>
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
    </div>
  );
};
