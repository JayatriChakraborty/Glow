import React from 'react';
import { Heart, ShoppingCart, User, Search } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 top-0 bg-transparent">
      <div className="max-w-[2000px] mx-auto px-16">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0 font-serif text-3xl text-white">
            GLOW
          </div>
          
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#" className="text-white hover:text-white/80">Shop</a>
              <a href="#" className="text-white hover:text-white/80">Shade Finder</a>
              <a href="#" className="text-white hover:text-white/80">About</a>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            <button className="text-white hover:text-white/80">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-white hover:text-white/80">
              <Heart className="h-5 w-5" />
            </button>
            <button className="text-white hover:text-white/80">
              <ShoppingCart className="h-5 w-5" />
            </button>
            <button className="text-white hover:text-white/80">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;