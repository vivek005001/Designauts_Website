import React, { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { Element } from "react-scroll";

const Artworks = ({textLeave,textEnter}) => {
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

  const titleSpring = (show) =>  useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "scale(1)" : "scale(1.5)",
    letterSpacing: show ? "0.1em" : "1.2rem",
  });

  const descSpring = (show) => useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "scale(1) " : "scale(1.5)",
    letterSpacing: show ? "0.1em" : "0.8em",
  });

  const dateSpring = (show) => useSpring({
    opacity: show ? 1 : 0,
    transform: show ? "scale(1) " : "scale(1.1)",
    letterSpacing: show ? "0.1em" : "0.3em",
  });

  const imageSpring = (end,extra) => useSpring({
    transform: `translate(-${(scrolled)/ 2}px, -${(scrolled)/ 2 }px)`,
  });

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className=" text-white items-center relative">
      <div className="h-[1200vh] overflow-x-hidden">
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="flex justify-center items-center text-6xl h-[100vh] mb-[15rem]">
          Welcome to Artworks
        </div>
        <div className="flex flex-col gap-[10rem]">
        {ArtWorksArr.map((artwork, index) => {
          const show = (scrolled > (350 + index*500 - index*20)) && (scrolled < ((350 + index*450) + 300 + index*50));
          const margin_val = (250*index).toString() + "px";
          return (
            <>
            <div key={index} className={`fixed z-30 top-[50vh] -rotate-90 left-0  overflow-visible`} >
            <animated.div style={dateSpring(show)} >
              <span onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-8xl">{artwork.date}</span>
            </animated.div>
            </div>
            <div
            key={index}
              className={`fixed z-30 w-[100%] top-[40vh] left-24 overflow-hidden`}
            >
              <Element name="scrollToElement">
                <animated.div className="text-center" style={titleSpring(show)}>
                  <h2 onMouseEnter={textEnter} onMouseLeave={textLeave} className="text-3xl">{artwork.title}</h2>
                </animated.div>
                <animated.div
                  className="text-center text-base mt-5 "
                  style={descSpring(show)}
                >
                  <p onMouseEnter={textEnter} onMouseLeave={textLeave}>{artwork.desc}</p>
                </animated.div>
              </Element>
            </div>
            <div key={index} className='w-[100%] flex justify-end -rotate-12' style={{ marginLeft: margin_val }}>
              <animated.div style={imageSpring(300 + index*500 + 400,0 )}>
                <img
                  src={artwork.img}
                  alt="" 
                  className="h-[500px] w-[500px] rounded-lg brightness-75 z-0"
                />
              </animated.div>
            </div>
          </>
          )
        })}
        </div>
      </div>
    </div>
  );
};

export default Artworks;
