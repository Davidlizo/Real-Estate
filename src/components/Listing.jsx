import React from 'react';
import { Link } from 'react-router-dom';

const Listing = ({ imageSrc, word, link }) => {
  return (
    <Link to={link} className="m-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full h-48 object-cover" src={imageSrc} alt={word} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{word}</div>
        </div>
      </div>
    </Link>
  );
};

export default Listing;