import React from 'react'
import RealEstateCard from '../components/RealEstateCard';

const properties = [
  {
    id: 1,
    title: 'Harmony Hill',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, renovated bathrooms, wraparound deck',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 2,
    title: 'Elmwood Manor',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, built-in wardrobes, private swimming pool',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 3,
    title: 'Cypress Grove',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '5 bedrooms, dual staircases, media room',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 4,
    title: 'Fernwood Retreat',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, en-suite master bathroom, covered porch',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 5,
    title: 'Misty Meadows',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, finished attic, landscaped garden',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 6,
    title: 'Eagle’s Nest',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '2 bedrooms, open floor plan, rooftop deck',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 7,
    title: 'Sapphire Bay',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, modern appliances, sunlit breakfast nook',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 8,
    title: 'Foxglove Cottage',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, large living room, private backyard',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 9,
    title: 'Hidden Valley',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '5 bedrooms, spacious kitchen, home gym',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 10,
    title: 'Blossom Creek',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, formal dining room, outdoor patio',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 11,
    title: 'Peach Blossom Villa',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, cozy fireplace, attached garage',
    address: ' ',
    agentNumber: ' '
  },
  
]

const Bayelsa = () => {
  return (
    <div className="pt-20">
      <h1 className="text-5xl font-semibold text-center text-gray-600">
        Bayelsa state
      </h1>
      <p className="mt-4 text-center">
        Houses available in Bayelsa state!
      </p>
      <div className="flex flex-wrap justify-center">
    <div className="flex flex-wrap justify-center">
      {properties.map(property => (
        <RealEstateCard key={property.id} property={property} />
      ))}
    </div>
    </div>
    </div>
   
  )
}

export default Bayelsa