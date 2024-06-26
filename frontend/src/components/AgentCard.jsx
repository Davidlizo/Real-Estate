import React from 'react'

const AgentCard = ({ property }) => {
    const { images, Name, Number, Email } = property;
  return (
    <div className="w-full sm:w-1/2 lg:w-1/3 p-4">
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-full flex flex-col">
      <img className="w-full h-48 object-cover" src={images[0]} alt={title} />
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{Name}</div>
        <p className="text-gray-700 text-base">{description}</p>
        <p className="text-gray-700 text-base">Email: {Email}</p>
        <p className="text-gray-700 text-base">phone number: {Number}</p>
      </div>
      
    </div>
  </div>
  )
}

export default AgentCard