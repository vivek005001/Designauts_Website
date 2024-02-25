import React from 'react'
import MainImg from '../images/Designauts_Main.png'
import Tech from './Soft.jsx'

const Home = () => {
  return (<>
 
    <div className='text-white text-2xl pt-28 h-[100vh] bg-black flex items-center justify-center'>
      <video src='/Website2.mov' autoPlay muted />
    </div>
    <div>
      <Tech />
    </div>
    </>
  )
}

export default Home