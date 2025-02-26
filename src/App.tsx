import React from 'react';
import { Heart, ShoppingCart, User, Search } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Bestsellers from './components/Bestsellers';
import Categories from './components/Categories';
import About from './components/About';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-[#f8f3f6]">
      <Navbar />
      <main>
        <Hero />
        <Bestsellers />
        <Categories />
        <About />
      </main>
      <Footer />
    </div>
  );
}

export default App;