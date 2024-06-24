import React from 'react'
import RealEstateCard from '../components/RealEstateCard';

const properties = [
  {
    id: 1,
    title: 'Fern Valley',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, renovated kitchen, private garden',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 2,
    title: 'Whispering Winds',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, breakfast bar, pond',
    address: ' ',
    agentNumber: ' '
  },
  {
    id:3 ,
    title: 'Lavender Fire',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '2 bedrooms, brick fireplace, community garden',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 4,
    title: 'Sunnybrook',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, large pantry',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 5,
    title: 'Autumn Breeze',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, jetted tub, workshop',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 6,
    title: 'Misty Pine',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, home office, three-car garage',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 7,
    title: 'Tranquil Meadows',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, bay windows, wraparound porch',
    address: ' ',
    agentNumber: ' '
  },
]

const Kebbi = () => {
  return (
    <div className="pt-20">
    <h1 className="text-5xl font-semibold text-center text-gray-600">
      Kebbi state
    </h1>
    <p className="mt-4 text-center">
      Houses available in Kebbi state!
    </p>
    <div className="flex flex-wrap justify-center">
    {properties.map(property => (
      <RealEstateCard key={property.id} property={property} />
    ))}
  </div>
  </div>

  )
}

export default Kebbi