import React from 'react';

const RealEstateCard = ({ property }) => {
  const { title, images, price, description, address, agentNumber } = property;

  // Encode the address for the URL
  const encodedAddress = encodeURIComponent(address);
  // Construct the Google Maps URL
  const googleMapsUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img className="w-full h-48 object-cover object-center" src={images[0]} alt={title} />
      <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{title}</div>
          <p className="text-gray-700 text-base">{description}</p>
          <p className="text-gray-700 text-base">Price: {price}</p>
          <p className="text-gray-700 text-base">Agent: {agentNumber}</p>
        </div>
        <div className="px-6 pb-4">
          <a
            href={googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            Address: {address}
          </a>
        </div>
      </div>
    </div>
  );
};

export default RealEstateCard;