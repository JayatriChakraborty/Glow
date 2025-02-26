import React from 'react';

const Categories = () => {
  return (
    <section className="py-20 px-16">
      <h2 className="text-7xl font-serif mb-16" style={{ fontFamily: 'Playfair Display' }}>Shop by Category</h2>
      <div className="relative h-[800px]">
        {/* Eyes */}
        <div className="absolute left-0 top-0 w-[35%] h-[45%]">
          <div className="relative h-full">
            <img 
              src="https://images.unsplash.com/photo-1583241749708-a482fe2c5c76?auto=format&fit=crop&q=80"
              alt="Eyes Category"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <h3 className="absolute bottom-6 left-6 text-white text-3xl">Eyes</h3>
          </div>
        </div>

        {/* Skincare */}
        <div className="absolute left-[25%] top-[15%] w-[30%] h-[70%]">
          <div className="relative h-full">
            <img 
              src="https://images.unsplash.com/photo-1570554886111-e80fcca6a029?auto=format&fit=crop&q=80"
              alt="Skincare Category"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <h3 className="absolute bottom-6 left-6 text-white text-3xl">Skincare</h3>
          </div>
        </div>

        {/* Face */}
        <div className="absolute left-[45%] top-[5%] w-[35%] h-[80%]">
          <div className="relative h-full">
            <img 
              src="https://images.unsplash.com/photo-1596704017704-0ad6c79ffbb7?auto=format&fit=crop&q=80"
              alt="Face Category"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <h3 className="absolute bottom-6 left-6 text-white text-3xl">Face</h3>
          </div>
        </div>

        {/* Lips */}
        <div className="absolute right-[10%] top-0 w-[25%] h-[45%]">
          <div className="relative h-full">
            <img 
              src="https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&q=80"
              alt="Lips Category"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <h3 className="absolute bottom-6 left-6 text-white text-3xl">Lips</h3>
          </div>
        </div>

        {/* Nails */}
        <div className="absolute right-0 bottom-[10%] w-[30%] h-[40%]">
          <div className="relative h-full">
            <img 
              src="https://images.unsplash.com/photo-1610992015732-2449b76344bc?auto=format&fit=crop&q=80"
              alt="Nails Category"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/20"></div>
            <h3 className="absolute bottom-6 left-6 text-white text-3xl">Nails</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Categories;