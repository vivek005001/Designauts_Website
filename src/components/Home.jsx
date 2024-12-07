import React from 'react'
import logo from "../images/designauts_logo_white.png";
import Tech from './Soft.jsx'
import ParticlesContainer from './ParticlesContainer.jsx'
import Carousel from './Carousel.jsx'
import ViewMore from './ViewMore.jsx'

const Home = () => {
  return (<>

    <div className="fixed top-0 left-0 w-full h-full ">
      <ParticlesContainer />  
    </div>   
    <div className='text-white text-2xl pt-28 h-[100vh] bg-black flex items-center justify-center z-10'>
      <video src='/Website2.mov' autoPlay muted />
    </div>
    <div className='bg-black flex flex-col items-center justify-center z-11'>
      <Carousel />
      <ViewMore />
      <div className="py-8 flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8">
          <img
            src={logo}
            alt="Designauts Logo"
            className="h-[50px] w-[150px] md:h-[60px] md:w-[200px]" // Responsive logo size
          />
          <h1 className="top py-8 text-center text-2xl md:text-4xl font-bold"> {/* Made the text larger */}
            Where Design Meets Creativity
          </h1>
        </div>

        <Tech />
      </div>
    </>
  );
};

export default Home;
