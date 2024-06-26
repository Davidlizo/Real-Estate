import React from 'react'
import RealEstateCard from '../components/RealEstateCard';
const properties = [
  {
    id: 1,
    title: 'Golden Oaks',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '5 bedrooms, formal living room, game room',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 2,
    title: 'Hearthside Villa',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, butler’s pantry, fenced yard',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 3,
    title: 'Willowmere',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, spacious dining area, garage',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 4,
    title: 'Maple Glen',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, sunroom, detached garage',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 5,
    title: 'Silver wood',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '5 bedrooms, grand foyer, home theater',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 6,
    title: 'Bluebell Cottage',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '2 bedrooms, bay windows, community garden',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 7,
    title: 'Cedar Hill',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, hardwood floors, fire pit',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 8,
    title: 'Meadowbrook',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, breakfast nook, landscaped yard',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 9,
    title: 'Amber Ridge',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, vaulted ceilings, private terrace',
    address: ' ',
    agentNumber: ' '
  },
]

const kaduna = () => {
  return (
    <div className="pt-20">
    <h1 className="text-5xl font-semibold text-center text-gray-600">
      Kaduna state
    </h1>
    <p className="mt-4 text-center">
      Houses available in Kaduna state!
    </p>
    <div className="flex flex-wrap justify-center">
    {properties.map(property => (
      <RealEstateCard key={property.id} property={property} />
    ))}
  </div>
  </div>
  
  )
}

export default kaduna