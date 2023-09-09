import React from 'react';
import NavBar from '../Components/NavBar';

function SurfTripsPages() {

  const instructors = [
    {
      name: 'John Smith',
      specialty: "Meet John Smith, our passionate and experienced surf instructor. With years of riding the waves and a deep love for the ocean, John brings a wealth of knowledge and enthusiasm to every surf lesson. Whether you're a beginner looking to catch your first wave or an experienced surfer seeking to refine your skills, John is dedicated to helping you ride the waves with confidence. Get ready for an unforgettable surf experience with John as your guide!",
      image: '/public/Resources/SurfTrips/SurfInstructor.jpg',
    },

  ];


  const waves = [
    {
      name: 'El Tunco Beach',
      description: "El Tunco Beach, a surfer's paradise, offers an exhilarating experience for intermediate surfers and beyond. Located along our stunning coastline, this surf spot is renowned for its consistent and long rides. Imagine catching waves as the sun sets on the horizon, creating a magical and unforgettable surfing backdrop. With its powerful and well-shaped waves, Sunset Point Break is where surfers come to challenge themselves and enjoy the thrill of riding the ocean's energy. It's a must-visit destination for any avid surfer looking to make unforgettable memories on the waves.",
      image: '/public/Resources/Session/El Tunco, La Libertad (7).jpg',
    },
    {
      name: 'Morning Barrels',
      description: "Morning Barrels is the ultimate playground for advanced surfers seeking an adrenaline rush. Situated on our coastline, this surf break is known for its massive barrels and powerful waves that come to life during the early morning hours. If you're a seasoned surfer looking for an intense and challenging ride, Morning Barrels is where you want to be. Picture yourself inside the towering barrels as you navigate the waves with skill and precision. It's a destination that promises epic surf sessions and the chance to conquer the ocean's raw power. Sunrise sessions at Morning Barrels are an experience every dedicated surfer should have on their bucket list.",
      image: '/public/Resources/SurfTrips/MorningBarrels.jpg',
    },

  ];


  const shopItems = [
    {
      name: 'Surfboard',
      price: "Introducing our top-of-the-line surfboard, the perfect companion for riders of all skill levels. Crafted with precision and designed for performance, this surfboard is your ticket to mastering the waves. Its sleek and streamlined shape ensures maximum maneuverability, allowing you to effortlessly catch and ride even the most challenging swells. Whether you're a seasoned pro looking for the perfect shred or a beginner ready to catch your first wave, our surfboard is your trusty partner in the surf. Dive into the ocean with confidence, knowing you're riding on a board that's built for adventure and exhilaration.",
      image: '/public/Resources/SurfTrips/SurfTable.webp',
    },
    {
      name: 'Beach T-shirt',
      price: "Introducing our premium surf shirt, designed to keep you comfortable and stylish both in and out of the water. Crafted from high-quality materials, this shirt offers excellent UV protection and quick-drying properties, making it the ideal choice for long days at the beach. Its lightweight and breathable fabric ensure you stay cool under the sun while catching those waves or simply lounging by the shore. With its trendy design and durable construction, our surf shirt is not just a piece of clothing—it's a statement of your passion for the ocean and the surfing lifestyle. Stay protected, stay stylish, and let your surf spirit shine with our surf shirt.",
      image: '/public/Resources/SurfTrips/TshirtBeach.webp',
    },

  ];

  return (
    <>
    <NavBar/>

    <div>
      <header className="bg-black text-white py-6">
        <h1 className="text-3xl font-semibold text-center">Surf Trips</h1>
      </header>

      <div className="container mx-auto p-8">

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Instructors</h2>
          <div className="flex flex-col">
            {instructors.map((instructor, index) => (
              <div key={index} className="mb-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={instructor.image}
                    alt={instructor.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{instructor.name}</h3>
                    <p className="text-gray-700">{instructor.specialty}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Waves</h2>
          <div className="flex flex-col">
            {waves.map((wave, index) => (
              <div key={index} className="mb-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={wave.image}
                    alt={wave.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{wave.name}</h3>
                    <p className="text-gray-700">{wave.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Shop</h2>
          <div className="flex flex-col">
            {shopItems.map((item, index) => (
              <div key={index} className="mb-4">
                <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-xl font-semibold">{item.name}</h3>
                    <p className="text-gray-700">{item.price}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </div>

    </div>
    </>
  );
}

export default SurfTripsPages
