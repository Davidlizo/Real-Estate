import React from 'react';
import RealEstateCard from '../components/RealEstateCard';

const properties = [
  {
    id: 1,
    title: 'Bluebell House',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, spacious dining area, garage',
    address: '',
    agentNumber: ' '
  },
  {
    id:2 ,
    title: 'Pine Haven',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '6 bedrooms, formal study, pool house',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 3,
    title: 'Sunny Ridge',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, open-plan kitchen, tennis court',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 4,
    title: 'Maple Grove',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, garden room, double garage',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 5,
    title: 'Oak View',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '5 bedrooms, art studio, hot tub',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 6,
    title: 'Willow Brook',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, cathedral ceilings, gazebo',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 7,
    title: 'Cedar Heights',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, butler’s pantry, fenced yard',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 8,
    title: 'Whispering Pines',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '5 bedrooms, spa bathroom, guest suite',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 9,
    title: 'Golden Meadows',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, home gym, sauna',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 10,
    title: 'Silver Birch Cottage',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, bay windows, wraparound porch',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 11,
    title: 'Cherry Blossom Retreat',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '2 bedrooms, brick fireplace, community garden',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 12,
    title: 'Tranquil Waters',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, granite countertops, home office',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 13,
    title: 'Rustic Oaks',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, sunken living room, koi pond',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 14,
    title: 'Lavender Hill',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '5 bedrooms, grand staircase, billiard room',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 15,
    title: 'Sunset Valley',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, jetted tub, workshop',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 16,
    title: 'Blue Horizon',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, built-in bookshelves, sunroom',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 17,
    title: 'Serenity Springs',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, marble countertops, two-car garage',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 18,
    title: 'Evergreen Lodge',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '5 bedrooms, formal dining area, outdoor shower',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 19,
    title: 'Meadowview Manor',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, large pantry, fire pit',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 20,
    title: 'Brookside Haven',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, vaulted ceilings, pergola',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 21,
    title: 'Riverstone Lodge',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '5 bedrooms, media room, skylights',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 22,
    title: 'Mountain Peak Chalet',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, stainless steel appliances, playroom',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 23,
    title: 'Seaside Sanctuary',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, breakfast nook, wet bar',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 24,
    title: 'Autumn Crest',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '6 bedrooms, panoramic windows, infinity pool',
    address: ' ',
    agentNumber: ' '
  },
 
];

const Abuja = () => {
  return (
    <div className="pt-20">
      <h1 className="text-5xl font-semibold text-center text-gray-600">
        Abuja state
      </h1>
      <p className="mt-4 text-center">
        Houses available in Abuja state!
      </p>
      <div className="flex flex-wrap justify-center">
    <div className="flex flex-wrap justify-center">
      {properties.map(property => (
        <RealEstateCard key={property.id} property={property} />
      ))}
    </div>
    </div>
    </div>
  );
};

export default Abuja;