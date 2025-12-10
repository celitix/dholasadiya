'use client';

import { useState } from 'react';
import Image from 'next/image';

const touristData = {
  nature: {
    title: "Nature and parks contain many of the treasured pieces of the universe and the majestic Dhola Sadiya bridge is the witness of all that eternal beauty. You can learn more about the Mother Nature and explore various resources in parks, from the grass on the ground to the sky overhead and everything in between.",
    places: [
      {
        id: 1,
        name: "Namdapha National Park",
        image: "/assets/Namdapha_National_Park.jpg"
      },
      {
        id: 2,
        name: "Kaziranga National Park",
        image: "/assets/Kaziranga.jpg"
      },
      {
        id: 3,
        name: "Dibru National Park",
        image: "/assets/Dibru.jpg"
      }
    ]
  },
  historic: {
    title: "All the historic sites present in our country describes the story of our rich cultural heritage. Come here and experience and explore the many facets of the history of our country through various tours, storytelling, exhibitions, taste our cuisine by cooking demonstrations, military drills and encampments. There are innumerable ways to find about our past.",
    places: [
      {
        id: 1,
        name: "Kachari Fort",
        image: "/assets/Kachari-Fort.jpg"
      },
      {
        id: 2,
        name: "Agnigarh Hill",
        image: "/assets/agnigarh_hills.jpg"
      },
      {
        id: 3,
        name: "Talatal Ghar",
        image: "/assets/Talatal.jpg"
      }
    ]
  },
  religious: {
    title: "Religious sites are spiritually meaningful to millions of people and they have always been that way to them. The ancient practice of visiting the sacred places has always been a charm for the explorers and popular among them. But you don’t have to be a believer to enjoy those serenity of holy places, admire the religious architecture, etc.",
    places: [
      {
        id: 1,
        name: "Kamakhya Temple",
        image: "/assets/Kamakhya.jpg"
      },
      {
        id: 2,
        name: "Umananda Temple",
        image: "/assets/Umananda.jpg"
      },
      {
        id: 3,
        name: "Bhuvaneswari Temple",
        image: "/assets/Bhuvaneswari-Temple.jpg"
      }
    ]
  },
  points: {
    title: "This is the longest bridge in the country and it reduces the distance between Assam and dhola and Arunachal Pradesh by 4km. Built over the river Brahmaputra, this bridge gives you a chance of getting connected with the tradition, culture and customs of the country and of different states.",
    places: [
      {
        id: 1,
        name: "Lohit River",
        image: "/assets/Lohi.jpg"
      },
      {
        id: 2,
        name: "Bogibeel Bridge",
        image: "/assets/Bogibeel-bridge.jpg"
      },
      {
        id: 3,
        name: "Rang Ghar",
        image: "/assets/hero3.jpg"
      }
    ]
  }
};

export default function TouristHotspots() {
  const [activeTab, setActiveTab] = useState('historic');

  const tabs = [
    { id: 'nature', label: 'Nature & Parks' },
    { id: 'historic', label: 'Historic Sites' },
    { id: 'religious', label: 'Religious Sites' },
    { id: 'points', label: 'Points Of Interest' }
  ];

  return (
    <section className="relative overflow-hidden">
      {/* Background Image Section */}
      <div className="relative py-12 px-4 md:py-16 lg:py-20 bg-cover bg-center bg-no-repeat" style={{backgroundImage: 'url(/assets/bg.gif)'}}>
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-500/20 via-blue-400/20 to-slate-500/20"></div>
        
        <div className="max-w-6xl mx-auto relative z-10 font-lato">
        {/* Header */}
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-2">
            Tourist Hotspots
          </h2>
          <div className="w-24 h-1 bg-cyan-600 mx-auto"></div>
        </div>

        {/* Tab Buttons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-0">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`py-3 md:py-4 px-4 md:px-6 text-sm md:text-base lg:text-lg font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-xl ${
                activeTab === tab.id
                  ? 'bg-white text-gray-800 shadow-lg'
                  : 'bg-cyan-500 text-white hover:bg-cyan-600'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content Section with White Background */}
        <div className="bg-white pt-8 md:pt-12 pb-8 md:pb-12 px-4 md:px-8 lg:px-10 -mx-4">
          {/* Content Description */}
          <div className="max-w-7xl mx-auto mb-8 md:mb-12">
            <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed text-center">
              {touristData[activeTab].title}
            </p>
          </div>

          {/* Cards Grid */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 lg:gap-10">
          {touristData[activeTab].places.map((place, index) => (
            <div
              key={place.id}
              className="group relative bg-white shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl"
              style={{
                animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`
              }}
            >
              {/* Image Container */}
              <div className="relative h-64 md:h-72 lg:h-80 overflow-hidden">
                <Image
                  src={place.image}
                  alt={place.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Title Bar */}
              <div className={`py-4 md:py-5 px-4 md:px-6 text-center transition-colors duration-300 bg-lime-500 group-hover:bg-lime-600`}>
                <h3 className="text-white text-base md:text-lg lg:text-xl font-semibold transition-transform duration-300 group-hover:scale-105">
                  {place.name}
                </h3>
              </div>

              {/* Decorative Border */}
              <div className="h-1 transition-all duration-300 bg-lime-400"></div>
            </div>
                      ))}
          </div>
        </div>
      </div>
      </div>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}