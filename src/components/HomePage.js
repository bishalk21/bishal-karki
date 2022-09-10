import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import me from "../assets/svg/me.svg";
import ft1 from "../assets/svg/ft1.png";
import ft2 from "../assets/svg/ft2.png";
import ta from "../assets/svg/ta.png";
import ta1 from "../assets/svg/ta2.png";
import ntdl from "../assets/svg/ntfl.png";
import dribble from "../assets/svg/dribble.svg";
import calc1 from "../assets/svg/calculator.png";
import calc2 from "../assets/webp/calculator.png";
import di from "../assets/webp/myDistorsionImage.webp";
import github from "../assets/svg/github.svg";
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
  const [isToggleOpen, setIsToggleOpen] = useState(true);

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

    // image hover effect
    Array.from(document.querySelectorAll(".project-card__middle")).forEach(
      (el) => {
        const imgs = Array.from(el.querySelectorAll("img"));
        new hoverEffect({
          parent: el,
          intensity: 0.2,
          speedIn: el.dataset.speedin || undefined,
          speedOut: el.dataset.speedout || undefined,
          easing: el.dataset.easing || undefined,
          hover: el.dataset.hover || undefined,
          image1: imgs[0].getAttribute("src"),
          image2: imgs[1].getAttribute("src"),
          displacementImage: el.dataset.displacement,
        });
      }
    );

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
      {/* Header */}
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
                className={`speaker__toggle ${
                  speakerState === "unmuted" ? "" : "speaker__toggle--anim"
                }`}
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

      <main className="container">
        <p className="about-text">
          Hello stranger! 👋, my name is Bishal Karki and I am a frontend
          engineer, passionate <br /> about digital products that help people
          experience everyday life, not endure it.
        </p>
        <section id="sectionProjects" className="section-projects">
          <h1 className="heading-1">
            <span>Yeah, I work hard </span> <small>💼</small>
          </h1>
          <p className="paragraph">
            Each project is unique. Here are some of my works.
          </p>

          <div className="project-card">
            <div className="project-card__left">
              <h4 className="heading-4">
                HTML, CSS, JS, React JS, Node JS, Express JS, Mongo DB
              </h4>
            </div>
            <div className="project-card__middle" data-displacement={di}>
              <img src={ft1} alt="finance tracker" />
              <img src={ft2} alt="finance tracker" />
            </div>
            <div className="project-card__right">
              <h2
                data-scroll
                data-scroll-offset="35%"
                data-scroll-repeat={true}
                data-scroll-class="ft-anim"
                className="heading-2"
              >
                My Finance Tracker
              </h2>
              <a
                rel="noopener"
                target="_blank"
                href="https://my-finance-tracker.herokuapp.com/"
                className="project-card__link"
              >
                VISIT THE WEBSITE
              </a>
              <div className="project-card__socials">
                <a href="#">
                  <img src={dribble} alt="dribble icon" />
                </a>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/bishalk21/my-finance-tracker"
                >
                  <img src={github} alt="github icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card__left">
              <h4 className="heading-4">
                HTML, CSS, JS, React JS, Node JS, Express JS, Mongo DB
              </h4>
            </div>
            <div className="project-card__middle" data-displacement={di}>
              <img src={ta} alt="tech-axis" />
              <img src={ta1} alt="tech-axis logo" />
            </div>
            <div className="project-card__right">
              <h2
                data-scroll
                data-scroll-offset="35%"
                data-scroll-repeat={true}
                data-scroll-class="tech-anim"
                className="heading-2"
              >
                TechAxis e-Learning Platform
              </h2>
              <a
                rel="noopener"
                target="_blank"
                href="https://tech-axis.herokuapp.com/"
                className="project-card__link"
              >
                VISIT THE WEBSITE
              </a>
              <div className="project-card__socials">
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/bishalk21/tech-axis"
                >
                  <img src={dribble} alt="dribble icon" />
                </a>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/bishalk21/tech-axis"
                >
                  <img src={github} alt="github icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card__left">
              <h4 className="heading-4">HTML, CSS, JAVASCRIPT, React JS</h4>
            </div>
            <div className="project-card__middle" data-displacement={di}>
              <img src={calc1} alt="Calculator" />
              <img src={calc2} alt="Calculator logo" />
            </div>
            <div className="project-card__right">
              <h2
                data-scroll
                data-scroll-offset="35%"
                data-scroll-repeat={true}
                data-scroll-class="calc-anim"
                className="heading-2"
              >
                Prank Calculator
              </h2>
              <a
                href="https://bishalk21.github.io/JS_Calculator/"
                rel="noopener"
                target="_blank"
                className="project-card__link"
              >
                VISIT THE WEBSITE
              </a>
              <div className="project-card__socials">
                <a href="#">
                  <img src={dribble} alt="dribble icon" />
                </a>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/bishalk21/JS_Calculator"
                >
                  <img src={github} alt="github icon" />
                </a>
              </div>
            </div>
          </div>

          <div className="project-card">
            <div className="project-card__left">
              <h4 className="heading-4">
                HTML, SCSS, JAVASCRIPT, React JS, Node JS, Express JS, Mongo DB
              </h4>
            </div>
            <div className="project-card__middle" data-displacement={di}>
              <img src={ntdl} alt="not to do" />
              <img src={ntdl} alt="not to do" />
            </div>
            <div className="project-card__right">
              <h2
                data-scroll
                data-scroll-offset="35%"
                data-scroll-repeat={true}
                data-scroll-class="bishal-anim"
                className="heading-2"
              >
                Not To Do List
              </h2>
              <a
                rel="noopener"
                target="_blank"
                href="https://not-to-do-list-app.herokuapp.com/"
                className="project-card__link"
              >
                VIEW SOURCE CODE
              </a>
              <div className="project-card__socials">
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://not-to-do-list-app.herokuapp.com/"
                >
                  <img src={dribble} alt="dribble icon" />
                </a>
                <a
                  rel="noopener"
                  target="_blank"
                  href="https://github.com/bishalk21/FS-not-to-do-app"
                >
                  <img src={github} alt="github icon" />
                </a>
              </div>
            </div>
          </div>
        </section>
        {/* 
        <section
          data-scroll
          data-scroll-offset="35%"
          data-scroll-repeat={true}
          data-scroll-class="section-reviews__bg"
          className="section-reviews"
        >
          <div className="section-reviews__top">
            <h1 className="heading-1">
              <span>Mmmm, a little brag </span> <small>😊</small>
            </h1>
            <p className="paragraph paragraph__sub">
              What people are saying about my last portfolio
            </p>
          </div>
          {/* <div className="section-reviews__bottom">
            <div className="section-reviews__bottom-wrapper review-card__anim1">
              {reviews?.data.map((review) => (
                <div key={review.id} className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">{review.name}</p>
                      <h3 className="review-card__h3">{review.userName}</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">{review.reply}</h2>
                  </div>
                </div>
              ))}
            </div>
            <div className="section-reviews__bottom-wrapper review-card__anim2">
              {reviews?.data.sort().map((review: Ireply) => (
                <div key={review.id} className="review-card">
                  <div className="review-card__top">
                    <div className="review-card__top--left">
                      <p className="review-card__p">{review.name}</p>
                      <h3 className="review-card__h3">{review.userName}</h3>
                    </div>
                    <div className="review-card__top--right">
                      <img src="svg/twitter.svg" alt="twitter icon" />
                    </div>
                  </div>
                  <div className="review-card__bottom">
                    <h2 className="review-card__h2">{review.reply}</h2>
                  </div>
                </div>
              ))}
            </div>
          </div> 
        </section> */}
        <section className="section-contact">
          <h1 className="heading-1">
            <span>Sold Yet? </span> <small>🤙</small>
          </h1>
          <h2 className="section-contact__h2">
            Thanks for stopping by, I’m currently looking to join a new team of
            creative designers and developers. If you think we might be a good
            fit for one another, give me a
            <a href="tel:+61433982572">
              {" "}
              call 🇦🇺 <i className="fas fa-phone"></i> &nbsp;
            </a>
            or send me an
            <a
              href="mailto:karkibishal00@gmail.com"
              rel="noopener"
              target="_blank"
            >
              &nbsp; email <i className="fas fa-envelope"></i>
            </a>
            .
          </h2>
        </section>
        {/* Socials */}
        <section className="section-socials">
          <h1 className="heading-1">
            <span>Dont be a stranger!</span> <small>👋</small>
          </h1>
          <p className="paragraph">Connect with me online</p>
          <div className="section-socials--links">
            <a
              href="https://github.com/bishalk21"
              rel="noopener"
              target="_blank"
            >
              <i className="fab fa-github"></i> GitHub
            </a>
            <a
              href="https://twitter.com/k_bishal21"
              rel="noopener"
              target="_blank"
            >
              <i className="fab fa-twitter"></i> Twitter
            </a>
            <a
              href="https://www.linkedin.com/in/bishalk21/"
              rel="noopener"
              target="_blank"
            >
              <i className="fab fa-linkedin"></i> LinkedIn
            </a>
            <a
              href="https://www.instagram.com/k_bishal02/"
              rel="noopener"
              target="_blank"
            >
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};
