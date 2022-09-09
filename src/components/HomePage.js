import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import me from "../assets/svg/me.svg";

const locomotiveScroll =
  typeof window !== "undefined" ? require("locomotive-scroll").default : null;

const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

export const HomePage = () => {
  const refScroll = useRef(null);
  let lscroll = "";

  useEffect(() => {
    if (!refScroll.current) return;

    lscroll = new locomotiveScroll({
      el: refScroll.current,
      smooth: true,
      reloadOnContextChange: true,
      multiplier: 0.75,
      inertia: 0.5,
    });

    // update locomotive scroll
    window.addEventListener("load", () => {
      let image = document.querySelector("img");
      // @ts-ignore
      const isLoaded = !image.complete && !image.naturalHeight !== 0;

      lscroll.update();
    });

    console.clear();
    console.log("👋🏾 Hi there! 👋🏾");
    console.log.apply(console, [
      "%c Designed and Developed by Bishal Karki %c %c🚀 %c\n",
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
              Node JS <i className="fab fa-node-js"></i>
            </p>
            <p className="preloader__text">
              Mongo DB <i className="fas fa-database"></i>
            </p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};
