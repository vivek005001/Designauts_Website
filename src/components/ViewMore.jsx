import React from 'react';
import { Link } from 'react-router-dom';

const ViewMore = () => {
  return (
    <div className='flex flex-col justify-center items-center z-[10] py-16'>
      <Link to='/ArtWorks'>
        <button className="text-white font-bold py-2 px-8 rounded text-xl border border-white bg-transparent transition duration-300 hover:text-[#C0C0C0] hover:border-[#C0C0C0] hover:bg-transparent hover:scale-105"
        >
          View More Artworks
        </button>
      </Link>
    </div>
  );
}

export default ViewMore;
