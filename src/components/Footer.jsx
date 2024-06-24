import React from 'react';

const Footer = () => {
  return (
    <div>
    <div className="bg-gray-700 text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left">
          <h2 className="text-4xl text-lg font-bold">HomeBuy </h2>
          <p>Welcome to our real estate platform! </p> 
             <p>We’re passionate about connecting buyers, sellers,</p>
             <p>and renters with their ideal properties. </p>
          <a href="./about" className="text-gray-900 hover:text-gray-400">read more..</a>
          
        </div>
        <div className='flex space-x-4 justify-between '>
            <a href="./contact" className='hover:text-gray-400'>Contact</a>
            <a href="./privacypolicy" className='hover:text-gray-400'>Privacy Policies</a>
            <a href="./terms&conditions" className='hover:text-gray-400'>Terms & Conditions</a>

        </div>
        
        <div>
          <h1>Subscribe to our newsletter</h1>
          <div class="mt-2 flex items-center space-x-2">
                <input
                  id="email"
                  name="email"
                  type="email"
                  autocomplete="email"
                  required
                  class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                  placeholder="Inut your Email"
                />
                
            <button
              type="submit"
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none focus:bg-gray-600"
            >
              Submit
            </button>
              </div>
        </div>
      </div>
      
      
    </div>
    <div className="bg-gray-900">
        <div className=" container mx-auto flex flex-col md:flex-row justify-between items-center ">
          <div className="w-full text-center">
            <p className="text-center text-white">Copyright © 2024 HomeBuy. All rights reserved.</p>
          </div>
        </div>
    </div>
  </div>
  );
}

export default Footer;