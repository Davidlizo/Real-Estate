import React from "react";
import background from "../images/png/background.png";
import SearchForm from "../components/SearchForm";
import Listing from "../components/Listing";



const Home = () => {
  const listingData = [
    { imageSrc: "https://demo-source.imgix.net/house.jpg?fit=crop&w=247.333666&h=248&dpr=2&q=50&auto=format%2Ccompress&cacheID=3432356195", word: "Lagos", link: "/lagos" },
    { imageSrc: "https://www.nairaland.com/attachments/15623259_img20220621163613_jpeg8786512471b0a463e574b8fa9f299e2d", word: "Abuja", link: "/abuja" },
    { imageSrc: "https://i.pinimg.com/originals/70/c7/9b/70c79bdfb82a6d39b2b54f3aa49a32b0.jpg", word: "Port Harcourt", link: "/portharcourt" },
    { imageSrc: "https://th.bing.com/th/id/OIP.Gc6LM9fDo_SL7f7tRB2U4AHaE7?w=256&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", word: "Kaduna", link: "/kaduna" },
    { imageSrc: "https://th.bing.com/th/id/OIP.bXPSOaM7JjuWpnQRN4smTwHaE8?w=221&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7", word: "Ogun", link: "/ogun" },
    { imageSrc: "https://i.pinimg.com/originals/5e/8f/0b/5e8f0b24f19624754d2aa37968217d5d.jpg", word: "Anambra", link: "/anambra" },
    { imageSrc: "https://th.bing.com/th/id/OIP.Bkegd2ABoHn9H34rmIAgnwAAAA?pid=ImgDet&w=208&h=208&c=7&dpr=1.5", word: "Kebbi", link: "/kebbi" },
    { imageSrc: "https://i.pinimg.com/originals/ba/1d/64/ba1d640ed580560d9c5d0439bdebc92c.jpg", word: "Yobe", link: "/yobe" },
    { imageSrc: "https://th.bing.com/th/id/OIP.k-uyKt4wHl8kXe9O4pFCiQHaGT?w=852&h=726&rs=1&pid=ImgDetMain", word: "Bayelsa", link: "/bayelsa" },
    { imageSrc: "https://th.bing.com/th/id/OIP.FWZQu-c6w6ovGRUNW6E7BAHaKv?rs=1&pid=ImgDetMain", word: "Edo", link: "/edo" },
  ]
  

  return (
    <div>
      <div className="relative background-img">
        <img className="max-w-[100%] w-full h-auto" src={background} alt="Background " />
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-semibold text-center text-gray-600">
            Discover your dream home here!
          </h1>
          <div className="absolute flex justify-center w-full bottom-[120px]">
            <SearchForm />
          </div>
        </div>
      </div>

      <div className="mt-20 mb-15 text-center"> {/* Increased top margin to 12 and bottom margin to 8 */}
        <h2 className="text-3xl font-semibold text-gray-600">Pick a preferred city!</h2>
        <p className="text-lg text-gray-600">Discover your ideal city, a guide to choosing your perfect home</p>
      </div>

      <div className="grid grid-cols-5 gap-4 mt-4">
        {listingData.map((listing, index) => (
          <Listing key={index} {...listing} />
        ))}
      </div>
      <div className="mt-20 mb-15 text-center">
      <h2 className="text-3xl font-semibold text-gray-800">Testimonials from out past customers!</h2>
      </div>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
       
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-2xl font-semibold mb-6 text-center">“Exceptional Service!”</h2>
            <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>
                    “Our experience with HomeBuy was truly outstanding. From the moment we connected, 
                    their team went above and beyond to find us the perfect home. Their dedication, 
                    personalized approach, and attention to every detail made the process seamless. We highly recommend them!”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">Olla Adams </div>
                        <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                            <circle cx={1} cy={1} r={1} />
                          </svg>
                      <div className="text-gray-600">CEO of Olla Adams Ent</div>
                  </div>
                </figcaption>

            </figure>
        </div>

      </section>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
       
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-2xl font-semibold mb-6 text-center">“Professional and Knowledgeable”</h2>
            <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>
                    “Working with HomeBuy was a pleasure. 
                    Their expertise and attention to detail made the buying process smooth and stress-free. 
                    They patiently answered all our questions and guided us through every step.
                     We felt confident in their knowledge of the market.”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">Judith Black</div>
                        <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                            <circle cx={1} cy={1} r={1} />
                          </svg>
                      <div className="text-gray-600">CEO of Quantum Apex Solutions</div>
                  </div>
                </figcaption>

            </figure>
        </div>

      </section>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
       
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
          <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h2 className="text-2xl font-semibold mb-6 text-center">“Trustworthy and Reliable”</h2>
            <figure className="mt-10">
                <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                  <p>
                    “We’ve bought and sold multiple properties through HomeBuy.
                     They consistently deliver results and provide honest advice.
                      Their transparency and reliability set them apart. We trust them implicitly”
                  </p>
                </blockquote>
                <figcaption className="mt-10">
                  <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                      <div className="font-semibold text-gray-900">Nathaniel Brooks</div>
                        <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                            <circle cx={1} cy={1} r={1} />
                          </svg>
                      <div className="text-gray-600">CEO of Vertex Dynamics Ltd</div>
                  </div>
                </figcaption>

            </figure>
        </div>

      </section>
      <section className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:px-8">
       
       <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-white shadow-xl shadow-indigo-600/10 ring-1 ring-indigo-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
         <div className="mx-auto max-w-2xl lg:max-w-4xl">
           <h2 className="text-2xl font-semibold mb-6 text-center">
           “Responsive and Attentive”</h2>
           <figure className="mt-10">
               <blockquote className="text-center text-xl font-semibold leading-8 text-gray-900 sm:text-2xl sm:leading-9">
                 <p>
                   “From the first call to closing, Halimat was there for us.
                    Their responsiveness and dedication made all the difference. 
                   They promptly addressed our concerns and kept us informed throughout the process.”
                 </p>
               </blockquote>
               <figcaption className="mt-10">
                 <img
                     className="mx-auto h-10 w-10 rounded-full"
                     src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                     alt=""
                   />
                 <div className="mt-4 flex items-center justify-center space-x-3 text-base">
                     <div className="font-semibold text-gray-900">Lima Maria</div>
                       <svg viewBox="0 0 2 2" width={3} height={3} aria-hidden="true" className="fill-gray-900">
                           <circle cx={1} cy={1} r={1} />
                         </svg>
                     <div className="text-gray-600">CEO of Nebula Synergy Corp</div>
                 </div>
               </figcaption>

           </figure>
       </div>

     </section>


      
    </div>
  );
};

export default Home;