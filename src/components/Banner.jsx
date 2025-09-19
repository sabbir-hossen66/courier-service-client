import React from "react";

const Banner = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-6 lg:px-16 grid lg:grid-cols-2 gap-10 items-center">
        
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight text-gray-900">
            Fast & Reliable <span className="text-green-600">Courier Service</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            Deliver your parcels safely and on time. From city to city, door to door – 
            we’ve got you covered.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-green-600 hover:bg-green-700 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition">
              Book Now
            </button>
            <button className="border border-green-600 text-green-600 hover:bg-green-600 hover:text-white px-6 py-3 rounded-full transition">
              Track Package
            </button>
          </div>
        </div>

        {/* Right Image in Green Box */}
        <div className="flex justify-center lg:justify-end">
          <div className="bg-green-100 p-6 rounded-2xl shadow-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/679/679922.png"
              alt="Courier Delivery"
              className="w-72 md:w-[380px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
