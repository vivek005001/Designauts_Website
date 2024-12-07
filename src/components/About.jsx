import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom"; // Make sure to import Link
import ParticlesContainer from './ParticlesContainer.jsx'; // Import your ParticlesContainer

// Main About component
const About = ({ textEnter, textLeave }) => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full">
        <ParticlesContainer />  {/* Particle background */}
      </div>

      <section
        className="w-full px-8 py-20 grid grid-cols-1 md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto relative z-10" // Ensure content is above particles
        style={{ paddingTop: '100px' }}
      >
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className="space-y-4">
          <span className="block text-xs md:text-sm text-gray-500 font-small font-family: Poppins,sans-serif">
            IIT Mandi's Design Club
          </span>
          <h3 className="text-4xl md:text-6xl text-white font-bold font-family: Poppins">
            DESIGNAUTS
          </h3>
          <p className="text-base md:text-lg text-gray-500 my-4 md:my-6">
            Designauts is IIT Mandi’s hub for design enthusiasts! From graphic design to product innovation, we explore it all with hands-on workshops, projects, and guest speakers. Thinking Made Visual.
          </p>
          {/* View More Artworks Button for Desktop View */}
          <button
            className="hidden md:block text-white font-bold py-2 px-8 rounded text-xl border border-white transition duration-300 ease-in-out hover:text-[#C0C0C0] hover:border-[#C0C0C0] hover:bg-transparent hover:scale-105"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.2)', // Set background color with opacity
            }}
          >
            View More Artworks
          </button>
        </div>

        <div className="flex flex-col gap-6 w-full">
          {/* Shuffle Grid */}
          <ShuffleGrid />

          {/* View More Artworks Button for Mobile View */}
          <div className="block md:hidden flex justify-center items-center z-[10] py-16">
            <Link to="/ArtWorks">
              <button
                className="text-white font-bold py-2 px-8 rounded text-xl border bg-transparent border-white transition duration-300 ease-in-out hover:text-[#C0C0C0] hover:border-[#C0C0C0] hover:bg-transparent hover:scale-105"
                style={{
                  backgroundColor: 'rgba(255, 255, 255, 0.2)', // Set background color with opacity
                }}
              >
                View More Artworks
              </button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

// Function to shuffle an array
const shuffle = (array) => {
  let currentIndex = array.length;
  let randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    // Swap elements
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
};

// Sample square data with image URLs (8 images)
const squareData = [
  {
    id: 1,
    src: "/images/robo.jpg",
  },
  {
    id: 2,
    src: "/images/1.JPG",
  },
  {
    id: 3,
    src: "/images/collage.jpg",
  },
  {
    id: 4,
    src: "/images/2.png",
  },
  {
    id: 5,
    src: "/images/3.JPG",
  },
  {
    id: 6,
    src: "/images/4.png",
  },
  {
    id: 7,
    src: "/images/5.JPG",
  },
  {
    id: 8,
    src: "/images/7.jpg",
  },
];

// Function to generate squares for the ShuffleGrid
const generateSquares = () => {
  return shuffle(squareData).map((sq) => (
    <motion.div
      key={sq.id}
      layout
      transition={{ duration: 1.5, type: "spring" }}
      className="w-full h-full"
      style={{
        backgroundImage: `url(${sq.src})`,
        backgroundSize: "cover",
      }}
    ></motion.div>
  ));
};

// ShuffleGrid component that handles the grid display
const ShuffleGrid = () => {
  const timeoutRef = useRef(null);
  const [squares, setSquares] = useState(generateSquares());

  // Effect to shuffle squares periodically
  useEffect(() => {
    shuffleSquares(); // Initial shuffle

    return () => clearTimeout(timeoutRef.current); // Cleanup on unmount
  }, []);

  const shuffleSquares = () => {
    setSquares(generateSquares()); // Update squares
    timeoutRef.current = setTimeout(shuffleSquares, 3000); // Reschedule
  };

  return (
    <div className="grid grid-cols-4 grid-rows-2 h-[450px] gap-1 md:gap-2">
      {squares.map((sq) => sq)}
    </div>
  );
};

// Export the About component as default
export default About;
