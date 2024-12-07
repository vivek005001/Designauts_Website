// import './nav.css'; // Import Tailwind CSS
import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/designauts_logo_white.png";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import AnimatedText from "./AnimatedText"
import blackLogo from "../images/designauts_logo_black.png";

function Navbar({ textLeave, textEnter }) {
  const [toggle, setToggle] = useState(false);
  const [y, setY] = useState(100);
  const [c, setC] = useState(100);
  const [isOpen, setOpen] = useState(false);

  const linkStyle = {
    color: "rgba(160, 160, 160, 1)",
  };

  const divLinkstyle = {
    color: "black",
  };

  const [linkAnimationKey, setLinkAnimationKey] = useState(0);
  const [showBlackLogo, setShowBlackLogo] = useState(false);

  const ref = useRef(null);

  useClickAway(ref, () => {
    setOpen(false);
  });

  useEffect(() => {
    let timeoutId;

    if (isOpen) {
      // Show black logo after a delay of 2 seconds
      timeoutId = setTimeout(() => {
        setShowBlackLogo(true);
      }, 500);
    } else {
      // Reset black logo visibility when closing the menu
      setShowBlackLogo(false);
    }

    return () => clearTimeout(timeoutId);
  }, [isOpen]);

  const transition = {
    duration: 1,
    ease: "easeIn",
  };

  const linkAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  const lerp = (start, end, t) => start * (1 - t) + end * t;

  const animate = () => {
    if (toggle) {
      setY(lerp(y, 0, 0.055));
      setC(lerp(c, 0, 0.075));
    } else {
      setY(lerp(y, 100, 0.055));
      setC(lerp(c, 100, 0.075));
    }
  };

  React.useEffect(() => {
    const animationId = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationId);
  }, [toggle, y, c]);

  const handleToggle = () => {
    setTimeout(() => {
      setToggle(!toggle);
    }, 300);

    if (toggle) {
      // Handle menu close
    } else {
      setTimeout(() => {
        // Handle menu open
      }, 1000);
    }
  };

  return (
    <div className="wrapper">
      <div className="header">
        <div className={`menu-tog ${toggle ? 'active' : ''}`} onClick={handleToggle}>
          <span></span>
          <span></span>
        </div>
      </div>

      <svg className="transition" viewBox="0 0 100 100" preserveAspectRatio="none">
        <path
          className="path"
          stroke="black"
          fill="#fcc42a"
          strokeWidth="3px"
          vectorEffect="non-scaling-stroke"
          d={`M 0 ${y} L 0 100 100 100 100 ${y} C ${50} ${c}, ${50} ${c}, 0 ${y}`}
        />
      </svg>

      <ul className={toggle ? '' : 'active'}>
      <div onMouseEnter={textEnter} onMouseLeave={textLeave} className=" pt-32 h-full lg:pl-32 flex flex-col gap-10"> 
              <Link
                to="/artworks"
                style={divLinkstyle}
                className={`mx-2 h-8 w-[max-content] px-6 py-1 text-2xl rounded transition-transform transform hover:scale-90 active:scale-95 focus:outline-none text-uppercase ${
                  isOpen ? "" : "hidden"
                }`}
              >
                <motion.span
                  variants={linkAnimationVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  <AnimatedText className="text-4xl" text = "ARTWORKS"/>
                </motion.span>
              </Link>
              <Link
                to="/about"
                style={divLinkstyle}
                className={`mx-2 h-8 px-6 w-[max-content] py-1 rounded text-2xl transition-transform transform hover:scale-90 active:scale-95 focus:outline-none text-uppercase ${
                  isOpen ? "" : "hidden"
                }`}
              >
                <motion.span
                  variants={linkAnimationVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.5, duration: 0.7 }}
                >
                  <AnimatedText className="text-4xl" text = "ABOUT"/>
                </motion.span>
              </Link>
              <Link
                to="/team"
                style={divLinkstyle}
                className={`mx-2 h-8 px-6 py-1 w-[max-content] rounded text-2xl transition-transform transform hover:scale-90 active:scale-95 focus:outline-none text-uppercase ${
                  isOpen ? "" : "hidden"
                }`}
              >
                <motion.span
                  variants={linkAnimationVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.9, duration: 0.9 }}
                >
                  <AnimatedText className="text-4xl" text = "TEAM"/>
                </motion.span>
              </Link>
              <Link
                to="/contact"
                style={divLinkstyle}
                className={`mx-2 h-8 px-6 py-1 w-[max-content] rounded text-2xl transition-transform transform hover:scale-90 active:scale-95 focus:outline-none text-uppercase ${
                  isOpen ? "" : "hidden"
                }`}
              >
                <motion.span
                  variants={linkAnimationVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 2.2, duration: 1.5 }}
                >
                  <AnimatedText className="text-4xl" text = "CONTACT"/>
                </motion.span>
              </Link>
            </div>
      </ul>
    </div>
  );
}

export default Navbar;
