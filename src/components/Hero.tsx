import React from 'react';

interface HeroProps {
  onExploreClick: () => void;
}

const Hero = ({ onExploreClick }: HeroProps) => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1506929562872-bb421503ef21?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-white mb-8">
            Explore the world's most beautiful destinations
          </p>
          <button
            onClick={onExploreClick}
            className="px-8 py-4 bg-gradient-to-r from-blue-500 to-teal-400 text-white rounded-full 
                     font-semibold text-lg transform transition hover:scale-105 hover:shadow-lg"
          >
            Explore Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;