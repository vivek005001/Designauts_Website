import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../images/designauts_logo_white.png";
import { motion, AnimatePresence } from "framer-motion";
import { Squash as Hamburger } from "hamburger-react";
import { useClickAway } from "react-use";
import blackLogo from "../images/designauts_logo_black.png";

function Navbar({ textLeave, textEnter }) {
  const linkStyle = {
    color: "rgba(160, 160, 160, 1)",
  };

  const divLinkstyle = {
    color: "black",
  };

  const [isOpen, setOpen] = useState(false);
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

  const variants = {
    hidden: { y: "-100%", clipPath: "circle(0% at 50% 0)" },
    visible: { y: 0, opacity: 1, clipPath: "circle(100% at 50% 0)" },
  };

  const transition = {
    duration: 1,
    ease: "easeIn",
  };

  const linkAnimationVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <header className="relative">
      <div className="fixed top-0 w-full z-50">
        <div className="flex items-center p-4 py-8 mb-10 mt-2 h-14 mx-auto max-w-7xl text-white">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 10 }} // Add a smooth transition duration
          >
            <Link to="/" className="cursor-pointer">
              <img
                src={showBlackLogo ? blackLogo : logo}
                alt="logo"
                className="w-40 pr-2 my-1 ml-2"
              />
            </Link>
          </motion.div>

          <div className="flex justify-end items-center flex-grow ml-4">
            <Link
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              to="/contact"
              style={linkStyle}
              className={`mx-2 h-8 px-6 py-1 rounded transition-transform transform focus:outline-none text-uppercase ${
                isOpen ? "hidden" : ""
              }`}
            >
              CONTACT
            </Link>

            <span
              onMouseEnter={textEnter}
              onMouseLeave={textLeave}
              style={linkStyle}
              className={`mx-2 h-8 px-6 py-1 rounded transition-transform transform focus:outline-none text-uppercase`}
            >
              MENU
            </span>

            <div ref={ref} onMouseEnter={textEnter} onMouseLeave={textLeave}>
              <Hamburger
                toggled={isOpen}
                size={18}
                toggle={() => {
                  setOpen(!isOpen);
                  if (!isOpen) {
                    setLinkAnimationKey((prevKey) => prevKey + 1);
                  }
                }}
                color={linkStyle.color}
              />
            </div>
          </div>
        </div>
      </div>

      <AnimatePresence onExitComplete={() => setLinkAnimationKey(0)}>
        {isOpen && (
          <motion.div
            onMouseEnter={textEnter}
            onMouseLeave={textLeave}
            key={linkAnimationKey}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={transition}
            className="fixed top-0 left-0 w-full h-full bg-white text-black p-10 z-40"
          >
            <div className=" pt-32 pl-32">
              <Link
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                to="/artworks"
                style={divLinkstyle}
                className={`mx-2 h-8 px-6 py-1 text-2xl rounded transition-transform transform hover:scale-90 active:scale-95 focus:outline-none text-uppercase ${
                  isOpen ? "" : "hidden"
                }`}
              >
                <motion.div
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  variants={linkAnimationVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1, duration: 0.5 }}
                >
                  ARTWORKS
                </motion.div>
              </Link>
              <Link
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                to="/about"
                style={divLinkstyle}
                className={`mx-2 h-8 px-6 py-1 rounded text-2xl transition-transform transform hover:scale-90 active:scale-95 focus:outline-none text-uppercase ${
                  isOpen ? "" : "hidden"
                }`}
              >
                <motion.div
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  variants={linkAnimationVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.3, duration: 0.5 }}
                >
                  ABOUT
                </motion.div>
              </Link>
              <Link
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                to="/team"
                style={divLinkstyle}
                className={`mx-2 h-8 px-6 py-1 rounded text-2xl transition-transform transform hover:scale-90 active:scale-95 focus:outline-none text-uppercase ${
                  isOpen ? "" : "hidden"
                }`}
              >
                <motion.div
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  variants={linkAnimationVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.6, duration: 0.5 }}
                >
                  TEAM
                </motion.div>
              </Link>
              <Link
                onMouseEnter={textEnter}
                onMouseLeave={textLeave}
                to="/contact"
                style={divLinkstyle}
                className={`mx-2 h-8 px-6 py-1 rounded text-2xl transition-transform transform hover:scale-90 active:scale-95 focus:outline-none text-uppercase ${
                  isOpen ? "" : "hidden"
                }`}
              >
                <motion.div
                  onMouseEnter={textEnter}
                  onMouseLeave={textLeave}
                  variants={linkAnimationVariants}
                  initial="hidden"
                  animate="visible"
                  transition={{ delay: 1.9, duration: 0.5 }}
                >
                  CONTACT
                </motion.div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

export default Navbar;
