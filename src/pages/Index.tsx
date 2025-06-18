
import React from 'react';
import Header from '../components/Header';
import HeroCarousel from '../components/HeroCarousel';
import CategoryGrid from '../components/CategoryGrid';
import FeaturedProducts from '../components/FeaturedProducts';
import OfferBanners from '../components/OfferBanners';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import MobileCallButton from '../components/MobileCallButton';

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-[72px] md:pt-[72px] sm:pt-[60px]">
        <HeroCarousel />
        <CategoryGrid />
        <FeaturedProducts />
        <OfferBanners />
      </main>
      <Footer />
      <CartDrawer />
      <MobileCallButton />
    </div>
  );
};

export default Index;
