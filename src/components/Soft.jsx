import React from 'react'
import BallCanvas from './Ball'
import WrapSection from './WrapSection'
import { technologies } from '../constants/constants'
import { motion } from 'framer-motion'
import { textVariant } from './motion'
import { styles } from '../styles'

const Tech = () => {
  return (
    <div className="pt-[9vh] pb-4">
      <motion.div  variants={textVariant()}>
     
      </motion.div>
      <div className='flex flex-row flex-wrap justify-center items-center gap-10 pr-10 pb-20'>
      {technologies.map((tech)=>(
        <BallCanvas key={tech.name} icon={tech.icon}/> 
      ))}
      </div>
    </div>
  )
}

export default WrapSection(Tech,"tech")