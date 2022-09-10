import * as React from "react";
import { motion } from "framer-motion";
import ft2 from "../../assets/svg/ft2.png";
import ntd from "../../assets/svg/ntfl.png";
import calc from "../../assets/svg/calculator.png";

const openTransition = {
  duration: 1.1,
  delay: 1.2,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const openTopTransition = {
  duration: 1.1,
  delay: 1.3,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const openBottomTransition = {
  duration: 1.1,
  delay: 1.7,
  ease: [0.6, 0.01, -0.05, 0.9],
};

const closedTansition = {
  duration: 1,
  ease: [0.6, 0.01, -0.05, 0.9],
};

export const MobileNavigation = ({ variants, isOpen }) => (
  <motion.div
    data-scroll
    data-scroll-sticky
    data-scroll-target="#menu-target"
    variants={variants}
    className="menu-wrapper"
  >
    <motion.div
      animate={
        isOpen
          ? { opacity: 1, transition: openTransition }
          : { opacity: 0, transition: closedTansition }
      }
    >
      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openTopTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-top"
      >
        <div className="navigation-top__left">
          <h4 className="navigation-h4">DONT BE A STRANGER</h4>
          <div className="navigation-top__left--links">
            <a
              href="https://github.com/bishalk21"
              rel="noopener"
              target="_blank"
            >
              <i className="fab fa-github"></i> GH
            </a>
            <a
              href="https://twitter.com/k_bishal21"
              rel="noopener"
              target="_blank"
            >
              <i className="fab fa-twitter"></i> TW
            </a>
            <a
              href="https://www.linkedin.com/in/bishalk21/"
              rel="noopener"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i> LI
            </a>
            <a
              href="https://www.instagram.com/k_bishal02/"
              rel="noopener"
              target="_blank"
            >
              <i className="fab fa-instagram"></i> IG
            </a>
          </div>
        </div>
        <div className="navigation-top__right">
          <h4 className="navigation-h4">HAVE AN IDEA?</h4>
          <a
            href="mailto:karkibishal00@gmail.com"
            target="_blank"
            rel="nofollow noopener noreferrer"
          >
            <i class="fas fa-envelope"></i> {"  "}
            Tell me about it
          </a>
        </div>
      </motion.div>

      <motion.div
        animate={
          isOpen
            ? { opacity: 1, transition: openBottomTransition }
            : { opacity: 0, transition: closedTansition }
        }
        className="navigation-bottom"
      >
        <h4 className="navigation-h4">FEATURED PROJECTS</h4>
        <div className="navigation-bottom__projects">
          <a
            target="_blank"
            rel="noopener"
            href="https://my-finance-tracker.herokuapp.com/"
            className="navigation-bottom__projects-card"
          >
            <img src={ft2} alt="My Finance Tracker" />
            <h2>My Finance Tracker</h2>
          </a>
          <a
            href="https://not-to-do-list-app.herokuapp.com/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src={ntd} alt="Not To Do List" />
            <h2>Not To Do List</h2>
          </a>
          <a
            href="https://bishalk21.github.io/JS_Calculator/"
            target="_blank"
            rel="noopener"
            className="navigation-bottom__projects-card"
          >
            <img src={calc} alt="Prank Calculator" />
            <h2>Prank Calculator</h2>
          </a>
        </div>
      </motion.div>
    </motion.div>
  </motion.div>
);
