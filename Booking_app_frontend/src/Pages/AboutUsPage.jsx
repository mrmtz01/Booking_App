import React from 'react';
import NavBar from '../Components/NavBar';

function AboutUs() {
  return (
    <>   
    <NavBar/> 
    <div>
      <header className="bg-black text-white py-6">
        <h1 className="text-3xl font-Ssemibold text-center">ABOUT US</h1>
      </header>
      <div className="container mx-auto p-8">
        <div className="flex flex-col space-y-6">

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <img
              className="w-1/3"
              src="/public/Resources/AboutUs/ourhistory.png"
              alt="OurHistory"
            />
            <div className="w-2/3 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">Our History</h2>
              <p className="text-gray-700">
                At the heart of this beautiful coastline, we began as a humble seaside retreat. Decades ago, we were just a small hotel with a few rooms and a dedicated team. However, our dreams were as vast as the ocean in front of us.

                Over the years, our commitment to exceptional hospitality and unforgettable experiences has allowed us to grow and evolve. From those humble beginnings, we have blossomed into a globally renowned oasis of luxury and comfort on the beach.

                Our history is a story of passion and dedication. Every day, we work tirelessly to provide our guests with a stay that transcends the ordinary. From the sea breeze that caresses our shores to the warm welcome of our staff, everything at our hotel has been designed with love and care.

                We have transformed our facilities to offer an experience that combines the natural beauty of the surroundings with modern luxury. Our rooms and suites are a sanctuary of comfort, and our amenities have been designed to cater to every desire and need of our guests.

                Our commitment to sustainability and environmental preservation is also an integral part of our history. We cherish our environment and work tirelessly to protect it and positively contribute to our community.

                As we continue to write our story, we hope you become a part of it. We invite you to discover the magic of our beachfront hotel and share with us a passion for hospitality and the beauty of the ocean that surrounds us.

              </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <img
              className="w-1/3"
              src="/public/Resources/AboutUs/ourteam.png"
              alt="OurTeam"
            />
            <div className="w-2/3 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">Our Team</h2>
              <p className="text-gray-700">
                At the heart of our success is a team of passionate and dedicated individuals. Our team is the essence of who we are and what we offer at our beachfront hotel.

                From the hospitality experts who greet you with a warm smile to the masterful chefs who create unforgettable culinary experiences, each member of our team plays a vital role in your stay.

                Our front desk staff is dedicated to making your arrival and departure seamless. They are available 24/7 to address your questions and ensure that every detail of your stay is carefully planned.

                Our chefs are true culinary artists who strive to surprise and delight you with exquisite dishes that highlight local flavors. Every meal is an experience that stimulates the senses and satisfies the most discerning palates.

                Our housekeeping team works tirelessly to keep the rooms and common areas spotless. Every corner of our hotel is a testament to their attention to detail and passion for cleanliness.

                Additionally, we have a team of activity and entertainment experts who will help you make the most of your beachfront stay. From thrilling water sports to relaxing excursions, they are here to make your days unforgettable.

                What truly sets our team apart is their love for what they do and their desire to make every moment of your stay memorable. They are here to serve you, to ensure you feel at home, and to make your experience at our beachfront hotel exceptional.

                Get to know the people who make the magic happen at our hotel. Each one of them shares a common commitment: to provide you with an experience that exceeds all expectations.

                </p>
            </div>
          </div>

          <div className="bg-white shadow-lg rounded-lg overflow-hidden flex">
            <img
              className="w-1/3"
              src="/public/Resources/AboutUs/ourvision.png"
              alt="OurVision"
            />
            <div className="w-2/3 p-6">
              <h2 className="text-2xl font-semibold mb-4 text-center">Our Vision</h2>
              <p className="text-gray-700">
                Our vision is to be the ultimate gateway to the joy of the waves. We believe in the transformative power of the ocean, and we're dedicated to sharing that magic with everyone who crosses our threshold.

                We envision a world where the soothing rhythm of the waves becomes a source of rejuvenation for all. Whether you're a seasoned surfer riding the swells or a first-time beachgoer dipping your toes in the surf, we want to be your haven of seaside bliss.

                Our commitment to this vision is unwavering. We're constantly innovating and expanding our offerings to provide a diverse range of experiences that celebrate the sea. From surfing lessons that ignite a lifelong passion to sunset yoga sessions on the shore that calm the soul, we're here to connect you with the ocean's pleasures.

                Beyond providing unparalleled comfort and hospitality, our greater purpose is to create moments of wonder and connection with the sea. We strive to be more than a destination; we aim to be a bridge between you and the ocean's allure.

                As we look ahead, we see a future where the waves unite us all in a shared appreciation for the beauty and serenity of the sea. Join us on this journey, and together, let's ride the waves of joy and discovery.

              </p>
            </div>
          </div>
        </div>
      </div>
     </div>
    </>

  );
}

export default AboutUs;
