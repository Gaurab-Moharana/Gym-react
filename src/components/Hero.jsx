import React from "react";
import "../styles/Hero.css";
import Header from "./Header";
import heroImage from "../assets/hero_image.png";
import heroImage_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import { motion, spring } from "framer-motion";
import NumberCounter from "number-counter";

function Hero() {
  const transition = { type: spring, duration: 3 };
  const mobile = window.innerWidth <= 768 ? true : false;
  return (
    <>
      <div className="hero" id="home">
        <div className="left-h">
          <Header />
          <div className="the-best-ad">
            <motion.div
              initial={{ left: mobile ? "165px" : "238px" }}
              whileInView={{ left: "8px" }}
              transition={{ ...transition, type: "tween" }}
            ></motion.div>
            <span>the best fitness club in the town</span>
          </div>
          <div className="hero-content">
            <div>
              <span className="stroke-text ">Shape </span>

              <span>Your</span>
            </div>
            <div>
              <span>Ideal Body</span>
            </div>
            <div>
              <span>
                In here we will help you to shape and Build your ideal body and
                live up your life to fullest
              </span>
            </div>
          </div>
          <div className="figure">
            <div>
              <span>
                <NumberCounter
                  end={140}
                  start={100}
                  delay="4"
                  postFix="+"
                ></NumberCounter>
              </span>
              <span>expert coaches</span>
            </div>
            <div>
              <span>
                <NumberCounter
                  end={978}
                  start={900}
                  delay="4"
                  postFix="+"
                ></NumberCounter>
              </span>
              <span>members joined</span>
            </div>
            <div>
              <span>
                <NumberCounter
                  end={42}
                  start={35}
                  delay="4"
                  postFix="+"
                ></NumberCounter>
              </span>
              <span>fitness programs</span>
            </div>
          </div>
          <div className="hero-buttons">
            <button className="btn">Get Started</button>
            <button className="btn">Learn More</button>
          </div>
        </div>
        <div className="right-h">
          <button className="btn">Join Now</button>
          <motion.div
            initial={{ right: "-1rem" }}
            whileInView={{ right: "4rem" }}
            transition={transition}
            className="heart-rate"
          >
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
          </motion.div>
          <img src={heroImage} alt="" className="hero-image" />
          <img src={heroImage_back} alt="" className="hero-image-back" />
          <motion.div
            initial={{ right: "37rem" }}
            whileInView={{ right: "28rem" }}
            transition={transition}
            className="calories"
          >
            <img src={Calories} alt="" />
            <div>
              <span>Calories Burned</span>
              <span>226 kcal</span>
            </div>
          </motion.div>
        </div>
      </div>
    </>
  );
}

export default Hero;
