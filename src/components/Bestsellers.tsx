import React from 'react';

const Bestsellers = () => {
  return (
    <section className="py-20 px-16">
      <h2 className="text-7xl font-serif mb-16" style={{ fontFamily: 'Playfair Display' }}>Bestsellers</h2>
      <div className="relative h-[800px]">
        {/* Large lipstick image */}
        <div className="absolute left-0 top-0 w-[45%] h-[80%]">
          <img 
            src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80"
            alt="Radiant Lipstick"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Eyeliner image */}
        <div className="absolute right-[15%] top-0 w-[30%] h-[45%]">
          <img 
            src="https://images.unsplash.com/photo-1631730359585-38a4935cbec4?auto=format&fit=crop&q=80"
            alt="Precision Eyeliner"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Palette image */}
        <div className="absolute right-0 bottom-0 w-[35%] h-[50%]">
          <img 
            src="https://images.unsplash.com/photo-1512496015851-a90fb38ba796?auto=format&fit=crop&q=80"
            alt="Glow Palette"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Red lipstick swatch */}
        <div className="absolute left-[35%] bottom-[10%] w-[40%] h-[30%]">
          <img 
            src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80"
            alt="Lipstick Swatch"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Bestsellers;