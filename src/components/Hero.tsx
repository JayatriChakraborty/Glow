import React from 'react';

const Hero = () => {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1558799401-1dcba79834c2?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      <div className="relative h-full flex items-center justify-start px-16">
        <div className="max-w-xl">
          <h1 className="text-7xl font-serif text-white mb-6">Discover Yourself</h1>
          <p className="text-lg text-white/90 mb-8 max-w-md">
            Explore our collection of luxurious skincare and makeup products designed to enhance your natural radiance
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;