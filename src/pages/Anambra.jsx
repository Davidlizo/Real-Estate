import React from 'react'
import RealEstateCard from '../components/RealEstateCard';


const properties = [
  {
    id: 1,
    title: 'Starlight Haven',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, breakfast bar, pond',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 2,
    title: 'Golden Pines',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, mudroom, expansive patio',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 3,
    title: 'Haven wood',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, bay windows, private courtyard',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 4,
    title: 'Magnolia Springs',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '5 bedrooms, dual living areas, wine cellar',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 5,
    title: 'Silverleaf Villa',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, hardwood floors, fire pit',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 6,
    title: 'Briarwood',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, media room, infinity pool',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 7,
    title: 'Moonlit Terrace',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '2 bedrooms, renovated kitchen, rooftop garden',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 8,
    title: 'Whispering Willows',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '5 bedrooms, library, greenhouse',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 9,
    title: 'Morning Glory',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, vaulted ceilings, carport',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 10,
    title: 'Timberline Cabin',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, breakfast nook, landscaped yard',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 11,
    title: 'Harvest Glen',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '6 bedrooms, formal living room, game room',
    address: ' ',
    agentNumber: ' '
  },
  {
    id:12 ,
    title: 'Rosewood Retreat',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '3 bedrooms, walk-in closet, private terrace',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 13,
    title: 'Hawthorn House',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '4 bedrooms, home office, three-car garage',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 14,
    title: 'Hearthstone Villa',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '5 bedrooms, gourmet kitchen, outdoor kitchen',
    address: ' ',
    agentNumber: ' '
  },
  {
    id: 15,
    title: 'Sunnybrook Cottage',
    images: ['https://example.com/abuja3.jpg', 'https://example.com/abuja4.jpg'],
    price: ' ',
    description: '2 bedrooms, loft space, communal pool',
    address: ' ',
    agentNumber: ' '
  },
  
]

const Anambra = () => {
  return (
    
    <div className="pt-20">
    <h1 className="text-5xl font-semibold text-center text-gray-600">
      Anambra state
    </h1>
    <p className="mt-4 text-center">
      Houses available in Anambra state!
    </p>
    <div className="flex flex-wrap justify-center">
  {properties.map(property => (
    <RealEstateCard key={property.id} property={property} />
  ))}
</div>
  </div>
  )
}

export default Anambra