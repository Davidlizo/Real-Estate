import React from 'react'
import RealEstateCard from '../components/RealEstateCard';

const properties = [
 {
    id: 1,
    title: ' ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 2,
    title: ' ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 3,
    title: ' ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 4,
    title: ' ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: ' ',
    agentNumber: ' '
  },
  {
    id:5 ,
    title: ' ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 6,
    title: ' ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 7,
    title: ' ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 8,
    title: ' ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 9,
    title: ' ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 10,
    title: ' ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 11,
    title: ' ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 12,
    title: ' ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 13,
    title: ' ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 14,
    title: ' ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: ' ',
    agentNumber: ' '
  },
]

const Yobe = () => {
  return (
    <div className="pt-20">
    <h1 className="text-5xl font-semibold text-center text-gray-600">
      Yobe state
    </h1>
    <p className="mt-4 text-center">
      Houses available in Yobe state!
    </p>
    <div className="flex flex-wrap justify-center">
    {properties.map(property => (
      <RealEstateCard key={property.id} property={property} />
    ))}
  </div>
  </div>
  )
}

export default Yobe