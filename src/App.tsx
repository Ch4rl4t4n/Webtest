import React, { useState } from 'react';
import { Search, Menu, X, Facebook, Twitter, Instagram, Send } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import FeaturedDestinations from './components/FeaturedDestinations';
import SearchBar from './components/SearchBar';
import TravelPackages from './components/TravelPackages';
import BookingModal from './components/BookingModal';
import Footer from './components/Footer';

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero onExploreClick={() => setIsModalOpen(true)} />
      <SearchBar />
      <FeaturedDestinations />
      <TravelPackages />
      <Footer />
      <BookingModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </div>
  );
}

export default App;