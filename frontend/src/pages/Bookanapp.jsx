import React from 'react'

const Bookanapp = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-semibold mb-6 text-center">Book an Appointment</h2>
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">Phone Number</label>
            <input
              type="tel"
              id="phone"
              name="phone"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Enter your phone number"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block text-gray-700 font-medium mb-2">Appointment Date</label>
            <input
              type="date"
              id="date"
              name="date"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="time" className="block text-gray-700 font-medium mb-2">Appointment Time</label>
            <input
              type="time"
              id="time"
              name="time"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-gray-700 font-medium mb-2">Anything to take note of?</label>
            <textarea
              id="message"
              name="message"
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
              placeholder="Leave a message"
              rows="4"
            ></textarea>
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="w-full px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-500 focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Bookanapp;