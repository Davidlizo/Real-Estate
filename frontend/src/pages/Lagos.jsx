import React from 'react';
import RealEstateCard from '../components/RealEstateCard';

const properties = [
  {
    id: 1,
    title: 'Luxury Villa ',
    images: ['https://example.com/lagos1.jpg', 'https://example.com/lagos2.jpg'],
    price: '1,000,000',
    description: '3 bedrooms, ocean view, spacious living room.',
    address: '123 Victoria Island Rd, Victoria Island, Lagos',
    agentNumber: '+234 123 4567'
  },
  {
    id: 2,
    title: 'Modern Apartment ',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '2 bedrooms, modern kitchen, large backyard.',
    address: '45 Lekki-Epe Expressway, Lekki, Lagos',
    agentNumber: '+234 890 1234'
  },
  {
    id: 3,
    title: 'Azure Haven ',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '4 bedrooms, rooftop terrace, city skyline view.',
    address: '78 Ikoyi Crescent, Ikoyi, Lagos',
    agentNumber: ''
  },
  {
    id: 4,
    title: 'Emerald Oasis',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '1 bedroom, cozy, balcony',
    address: '12 Bourdillon Road, Ikoyi, Lagos',
    agentNumber: ''
  },
  {
    id: 5,
    title: 'Golden Crest',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '5 bedrooms, swimming pool, luxurious interior',
    address: '34 Admiralty Way, Lekki Phase 1, Lagos',
    agentNumber: ''
  },
  {
    id: 6,
    title: 'Starlight Manor',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '3 bedrooms, garden, open-plan kitchen',
    address: '102 Ajah Badore Road, Ajah, Lagos',
    agentNumber: ''
  },
  {
    id: 7,
    title: 'Sunset Retreat',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '2 bedrooms, minimalist design, high ceilings',
    address: '7B Abacha Estate, Ikoyi, Lagos',
    agentNumber: ''
  },
  {
    id: 8,
    title: 'Whispering Pines',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '4 bedrooms, home office, gym',
    address: '29 Awolowo Way, Ikeja, Lagos',
    agentNumber: ''
  },
  {
    id: 9,
    title: 'Radiant Ridge ',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '1 bedroom, studio apartment, central location',
    address: '60A Ogunlana Drive, Surulere, Lagos',
    agentNumber: ''
  },
  {
    id: 10,
    title: 'Crystal Cove ',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '3 bedrooms, beachfront, private patio',
    address: '38 Oniru Estate, Victoria Island, Lagos',
    agentNumber: ''
  },
  {
    id:11,
    title: 'Luminous Grove',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '2 bedrooms, newly renovated, walk-in closets',
    address: '54 Ajose Adeogun Street, Victoria Island, Lagos',
    agentNumber: ''
  },
  {
    id: 12,
    title: 'Tranquil Meadow',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '4 bedrooms, spacious dining area, garage',
    address: '21 Yaba College Road, Yaba, Lagos',
    agentNumber: ''
  },
  {
    id: 13,
    title: 'Verdant Valley',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '5 bedrooms, gated community, marble floors',
    address: '46 Admiralty Road, Lekki Phase 1, Lagos',
    agentNumber: ''
  },
  {
    id:14,
    title: 'Silver Brook',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '2 bedrooms, loft-style, exposed brick',
    address: '88 Glover Road, Ikoyi, Lagos',
    agentNumber: ''
  },
  {
    id: 15,
    title: 'Harmony Haven',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '4 bedrooms, outdoor kitchen, guest house',
    address: '29 Awolowo Way, Ikeja, Lagos',
    agentNumber: ''
  },
  {
    id: 16,
    title: 'Blissful Bay',
    images: ['https://example.com/lagos3.jpg', 'https://example.com/lagos4.jpg'],
    price: '500,000',
    description: '4 bedrooms, luxury finishes, smart home system',
    address: '9B Ilasan New Road, Lekki, Lagos',
    agentNumber: ' '
  },
  
];

const Lagos = () => {
  return (
    <div className="pt-20">
    <h1 className="text-5xl font-semibold text-center text-gray-600">
      Lagos state
    </h1>
    <p className="mt-4 text-center">
      Houses available in Lagos state!
    </p>
    <div className="flex flex-wrap justify-center">
      {properties.map(property => (
        <RealEstateCard key={property.id} property={property} />
      ))}
    </div>
    </div>
  );
};

export default Lagos;