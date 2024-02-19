import React, { Fragment, useEffect, useRef } from "react";
import { TweenMax, Power2, gsap } from "gsap";
import { FaStar } from "react-icons/fa";
import {
  BsEmojiAngryFill,
  BsEmojiGrimaceFill,
  BsEmojiFrownFill,
} from "react-icons/bs";
import { MdEmojiEmotions } from "react-icons/md";
import "./index.css";

const MainContent = () => {
  const leftContainer = useRef(null);
  const imageEl = useRef(null);
  const headingE1 = useRef(null);
  const descriptionE1 = useRef(null);
  const descriptionE2 = useRef(null);
  const thirdBlockE1 = useRef(null);

  useEffect(() => {
    // Animate the element with GSAP
    TweenMax.to(leftContainer.current, 2, {
      x: 100,
      rotation: 360,
      ease: Power2.easeInOut,
    });
  }, []);

  useEffect(() => {
    // Animate the element with GSAP
    TweenMax.to(imageEl.current, 2, {
      x: 100,
      rotation: -360,
      ease: Power2.easeInOut,
    });
  }, []);

  useEffect(() => {
    const heading = headingE1.current;
    const description1 = descriptionE1.current;
    const description2 = descriptionE2.current;

    gsap.fromTo(
      [heading, description1, description2],
      { x: -1000 }, // Start from the left side (off-screen)
      { x: 0, duration: 3, ease: "power2.inOut", stagger: 0.5 } // Scroll to the right
    );
  }, []);

  useEffect(() => {
    const container = thirdBlockE1.current;

    // Get all the boxes inside the container
    const boxes = container.querySelectorAll(".box");

    // Animation
    gsap.fromTo(
      boxes,
      { x: 0 }, // Start from the left side (inside the screen)
      {
        x: -window.innerWidth, // Scroll to the left
        duration: 5,
        stagger: 0.5,
        repeat: 1, // Repeat animation infinitely
      }
    );
  }, []);

  const renderTheSecondContainer = () => (
    <div className="second-block flex flex-row justify-between">
      <h1 ref={headingE1} className="second-heading">
        EQ beats IQ
      </h1>
      <p ref={descriptionE1} className="second-description">
        People with high emotional <br />
        intelligence (EQ) live more fulfilled <br />
        lives.They tend to be happier and
        <br />
        have healthier relationships.
      </p>
      <p ref={descriptionE2} className="second-description">
        They are more successful in their <br />
        pursuits and make for inspiring <br />
        leaders. According to science, they <br />
        earn $29k a year.
      </p>
    </div>
  );

  const renderTheThirdContainer = () => (
    <div className="third-block1">
      {/* <h1>
        <b>Does this sound familiar...</b>
      </h1> */}
      <div ref={thirdBlockE1} className="third-block-description-containers">
        <div className="block3-cont-1 box">
          <BsEmojiAngryFill className="emoji" />
          <p>
            You arque with a colleague You <br />
            get angry and defensive, instead of
            <br />
            staying open and working towards <br />
            common ground.
          </p>
        </div>
        <div className="block3-cont-2 box">
          <BsEmojiFrownFill className="emoji" />
          <p>
            You get a promotion at work You <br />
            question yourself and wonder who <br />
            they'll realize you're an unqualified <br />
            imposter, instead of trusting yourself <br />& your abilities
          </p>
        </div>
        <div className="block3-cont-3 box">
          <BsEmojiGrimaceFill className="emoji" />
          <p>
            You attend a class reur You compare <br />
            yourself with you achievements, <br />
            instead of ma self-judgement more indeper others.
          </p>
        </div>
        <div className="block3-cont-4 box">
          <MdEmojiEmotions className="emoji" />
          <p>
            You arque with a colleague You get <br />
            angry and defensive, instead of <br />
            staying open and working towards common ground.
          </p>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <div className="first-container lg:flex">
        <div className="w-3/4 lg:w-60%">
          <p>
            <b>Ahead App</b>
          </p>
          <h1 className="head-text">
            Master your life <br />
            by mastering <br />
            your Emotions
          </h1>
          <div className="app-star-container">
            <div className="download-container">
              <p className="box-width">
                Download on the
                <br />
                <span className="appStore">App Store</span>
              </p>
            </div>
            <div>
              <div className="flex star-conatiner">
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
                <FaStar className="star-icon" />
              </div>
              <p>100+ AppStore reviews</p>
            </div>
          </div>
        </div>
        <img
          src="https://ik.imagekit.io/Satish108/spur-fit-company/images%20(2).jpg?updatedAt=1708230911464"
          className="w-1/2 lg:w-1/6 rounded-lg"
          alt="mobile"
        />
      </div>
      <div className="lg:flex">
        <div className="lg:w-1/2">{renderTheSecondContainer()}</div>
      </div>
      <div className="lg:w-1/2">{renderTheThirdContainer()}</div>
    </>
  );
};

export default MainContent;
