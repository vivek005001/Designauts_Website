import React, { useState, useRef, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';

function VideoCarousel() {
  const videos = [
    {
      url: '../../videos/003.mp4',
    },
    {
      url: '../../videos/0001.mp4',
    },
    {
      url: '../../videos/final.mp4',
    },
    {
      url: '../../videos/00.mp4',
    },
    {
      url: '../../videos/002.mp4',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRefs = useRef(videos.map(() => React.createRef()));

  useEffect(() => {
    // Pause all videos
    videoRefs.current.forEach((ref, index) => {
      if (ref.current) {
        ref.current.pause();
      }
    });

    // Play the current video
    if (videoRefs.current[currentIndex].current) {
      videoRefs.current[currentIndex].current.play();
    }
  }, [currentIndex]);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? videos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === videos.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className='max-w-[800px] md:max-w-[1000px] lg:max-w-[1200px] h-[300px] md:h-[400px] lg:h-[600px] w-full m-auto py-8 px-4 relative group'>
      {videos.map((video, index) => (
        <video
          key={index}
          ref={videoRefs.current[index]}
          src={video.url}
          className={`absolute top-0 left-0 w-full h-full object-cover rounded-2xl transition-opacity duration-500 ${
            index === currentIndex ? 'opacity-100' : 'opacity-0'
          }`}
          loop
          muted
          playsInline
        />
      ))}

        {/* Left Arrow */}
        <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-[-40px] md:left-[-40px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactLeft onClick={prevSlide} size={30} />
        </div>

        {/* Right Arrow */}
        <div className='group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-[-40px] md:right-[-40px] text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'>
          <BsChevronCompactRight onClick={nextSlide} size={30} />
        </div>

      {/* Dots */}
      <div className='flex absolute bottom-4 left-[50%] transform -translate-x-[50%] justify-center py-2'>
        {videos.map((_, slideIndex) => (
          <div
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
            className={`text-2xl cursor-pointer mx-1 ${
              currentIndex === slideIndex ? 'text-blue-500' : 'text-white'
            }`}
          >
            <RxDotFilled />
          </div>
        ))}
      </div>
    </div>
  );
}

export default VideoCarousel;