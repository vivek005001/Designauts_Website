import React from 'react'
import { motion } from 'framer-motion'
import { staggerContainer } from './motion'

//We are doing this because we want to wrap the different sections like Intro,Experience,Testimonials etc. into one so that we can have a single padding for all of them
const WrapSection = (Component, idName) =>
  function HOC() {
    return (
      <div >
      <motion.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{once: true,amount:0.25}}
        className=" pl-[5vw] "
      >
        <span id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
      </div>
      );
  };

export default WrapSection