import React from 'react'
import RealEstateCard from '../components/RealEstateCard';

const properties = [
  {
    id: 1,
    title: 'Opal Oasis',
    images: ['https://example.com/abuja1.jpg', 'https://example.com/abuja2.jpg'],
    price: '750,000',
    description: '5 bedrooms, private pool, large garden',
    address: '123 Olabisi Road, Abeokuta, Ogun State',
    agentNumber: ' '
  },
  {
    id: 2,
    title: 'Elysian Fields',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '3 bedrooms, stylish interiors, scenic balcony',
    address: '45 Adetokunbo Avenue, Sagamu, Ogun State',
    agentNumber: ' '
  },
  {
    id: 3,
    title: 'Mystic Meadows',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '4 bedrooms, elegant design, private garage',
    address: '78 Unity Street, Ijebu Ode, Ogun State',
    agentNumber: ' '
  },
  {
    id: 4,
    title: 'Serenity Springs ',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, sleek finishes, private garden.',
    address: '16 Peace Crescent, Sango Ota, Ogun State',
    agentNumber: ' '
  },
  {
    id: 5,
    title: 'Aurora Acres',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '5 bedrooms, multiple living areas, BBQ area',
    address: '89 Adeola Street, Ifo, Ogun State',
    agentNumber: ' '
  },
  {
    id: 6,
    title: 'Evergreen Enclave',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, spacious rooms, private terrace',
    address: '55 Freedom Drive, Ilaro, Ogun State',
    agentNumber: ' '
  },
  {
    id: 7,
    title: 'Majestic Views',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, spacious living, beautiful garden.',
    address: '34 Victory Lane, Ogbere, Ogun State',
    agentNumber: ' '
  },
  {
    id: 8,
    title: 'Golden Horizon',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: '23 Heritage Road, Obafemi Owode, Ogun State',
    agentNumber: ' '
  },
  {
    id: 9,
    title: 'Serene Summit',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: '67 Progress Avenue, Agbara, Ogun State',
    agentNumber: ' '
  },
  {
    id: 10,
    title: 'Cascade Manor',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: '102 New Estate, Ota, Ogun State',
    agentNumber: ' '
  },
  {
    id: 11,
    title: 'Whispering Willows',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: '21 Federal Housing Estate, Ayetoro, Ogun State',
    agentNumber: ' '
  },
  {
    id: 12,
    title: 'Dreamy Dunes',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: ' ',
    address: '12 Evergreen Street, Imeko, Ogun State',
    agentNumber: ' '
  },
]

const Ogun = () => {
  return (
    <div className="pt-20">
    <h1 className="text-5xl font-semibold text-center text-gray-600">
      Ogun state
    </h1>
    <p className="mt-4 text-center">
      Houses available in Ogun state!
    </p>
    <div className="flex flex-wrap justify-center">
    {properties.map(property => (
      <RealEstateCard key={property.id} property={property} />
    ))}
  </div>
  </div>
  )
}

export default Ogun