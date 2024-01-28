import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Element } from "react-scroll";
import { FaLongArrowAltRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const Artworks = ({ textLeave, textEnter }) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [])
  const ArtWorksArr = [
    {
      title: "PEKKA",
      desc: "This is the New Generation of IIT MANDI",
      img: "/images/pekka.jpg",
      date: "09/07/23",
    },
    {
      title: "DIWALI",
      desc: "This is the New Generation of IIT MANDI",
      img: "/images/diwali.jpg",
      date: "12/09/22",
    },
    {
      title: "COLLAGE",
      desc: "This is the New Generation of IIT MANDI",
      img: "/images/collage.jpg",
      date: "19/05/23",
    },
    {
      title: "ROBOTONICS",
      desc: "This is the New Generation of IIT MANDI",
      img: "/images/robo.jpg",
      date: "09/01/24",
    },
    {
      title: "NEW",
      desc: "This is the New Generation of IIT MANDI",
      img: "/images/new.jpg",
      date: "12/09/23",
    },
  ];

  const [scrolled, setScrolled] = useState(0);

  const titleSpring = (show) =>
    useSpring({
      opacity: show ? 1 : 0,
      transform: show ? "scale(1)" : "scale(1.5)",
      letterSpacing: show
        ? "0.1em"
        : windowWidth < 800
        ? windowWidth < 500
          ? "0.2em"
          : "0.5em"
        : "0.8em",
    });

  const descSpring = (show) =>
    useSpring({
      opacity: show ? 1 : 0,
      transform: show ? "scale(1) " : "scale(1.5)",
      letterSpacing: show
        ? "0.1em"
        : windowWidth < 800
        ? windowWidth < 500
          ? "0.15em"
          : "0.3em"
        : "0.8em",
    });

  const dateSpring = (show) =>
    useSpring({
      opacity: show ? 1 : 0,
      transform: show ? "scale(1) " : "scale(1.1)",
      letterSpacing: show ? "0.1em" : "0.3em",
    });

  const imageSpring = (end, extra) =>
    useSpring({
      transform: `translate(-${scrolled / 2}px, -${scrolled / 2}px)`,
    });
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", () => {
      setWindowWidth(window.innerWidth);
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" text-white items-center ">
      <div className=" overflow-hidden">
        <div
          onMouseEnter={textEnter}
          onMouseLeave={textLeave}
          className="flex max-md:text-5xl max-sm:text-4xl justify-center items-center text-6xl h-[100vh] mb-[15rem]"
        >
          Welcome to Artworks
        </div>
        <div className="flex flex-col relative gap-[10rem] mx-auto max-xl:max-w-[80%] h-[350vh] max-md:h-[250vh] max-md:gap-5">
          {ArtWorksArr.map((artwork, index) => {
            const show =
              scrolled >
                380 +
                  index * 500 +
                  (windowWidth > 1500
                    ? -index * 20
                    : windowWidth > 800
                    ? index * 10
                    : (index + 1) * 100 - 200 * index) &&
              scrolled <
                380 +
                  index * 500 +
                  (windowWidth > 1500
                    ? 300
                    : windowWidth > 800
                    ? 350 + 20 * index
                    : 400 - 100 * index);
            const margin_val =
              (
                (windowWidth > 1900
                  ? 200
                  : windowWidth < 1050
                  ? windowWidth < 750
                    ? 200
                    : 300
                  : 300) * index
              ).toString() + "px";
            return (
              <>
                <div
                  key={index}
                  className={`fixed z-30 top-[50vh] -rotate-90 left-0  overflow-visible`}
                >
                  <animated.div style={dateSpring(show)}>
                    <span
                      onMouseEnter={textEnter}
                      onMouseLeave={textLeave}
                      className="text-8xl max-xl:text-6xl max-sm:text-4xl"
                    >
                      {artwork.date}
                    </span>
                  </animated.div>
                </div>
                <div
                  key={index}
                  className={`fixed z-30 w-[100%] top-[40vh] left-24 overflow-hidden`}
                >
                  <Element name="scrollToElement" class="max-sm:mr-20">
                    <animated.div
                      className="text-center"
                      style={titleSpring(show)}
                    >
                      <h2
                        onMouseEnter={textEnter}
                        onMouseLeave={textLeave}
                        className="text-3xl"
                      >
                        {artwork.title}
                      </h2>
                    </animated.div>
                    <animated.div
                      className="text-center  text-base mt-5 max-sm:text-sm  "
                      style={descSpring(show)}
                    >
                      <p onMouseEnter={textEnter} onMouseLeave={textLeave}>
                        {artwork.desc}
                      </p>
                    </animated.div>
                  </Element>
                </div>
                <div
                  key={index}
                  className="w-[100%] flex justify-end -rotate-12"
                  style={{ marginLeft: margin_val }}
                >
                  <animated.div style={imageSpring(300 + index * 500 + 400, 0)}>
                    <img
                      src={artwork.img}
                      alt=""
                      className="h-[500px] w-[500px] max-lg:scale-[90%] max-xl:ml-[30rem] max-md:ml-[30rem] max-md:scale-75 rounded-lg brightness-75 z-0"
                    />
                  </animated.div>
                </div>
              </>
            );
          })}
          <Link
            to = "/more-artworks"
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            className="flex absolute hover:text-white text-white bottom-[13rem] left-[45%] gap-5 justify-center flex-col items-center cursor-pointer"
          >
            <span className="border text-3xl cursor-pointer border-white rounded-full text-white p-2 ">
              <FaLongArrowAltRight/>
            </span>
            <span className="text-3xl ">Show More</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Artworks;
