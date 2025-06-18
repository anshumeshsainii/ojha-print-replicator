
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Premium Business Cards",
      subtitle: "Starting at ₹299",
      description: "Professional quality printing for your business",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=400&fit=crop",
      cta: "Order Now"
    },
    {
      id: 2,
      title: "Wedding Invitations",
      subtitle: "Up to 50% Off",
      description: "Beautiful designs for your special day",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&h=400&fit=crop",
      cta: "Browse Collection"
    },
    {
      id: 3,
      title: "Corporate Gifts",
      subtitle: "Bulk Orders Available",
      description: "Customized solutions for your company",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=800&h=400&fit=crop",
      cta: "Get Quote"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[480px] md:h-[480px] sm:h-[320px] overflow-hidden bg-gradient-to-r from-orange-400 to-red-500">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-transform duration-500 ease-in-out ${
            index === currentSlide ? 'transform translate-x-0' : 
            index < currentSlide ? 'transform -translate-x-full' : 
            'transform translate-x-full'
          }`}
        >
          <div className="flex items-center h-full">
            <div className="w-1/2 px-8 lg:px-16 text-white">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                {slide.title}
              </h1>
              <p className="text-xl lg:text-2xl mb-2 text-orange-100">
                {slide.subtitle}
              </p>
              <p className="text-lg mb-6 text-orange-50">
                {slide.description}
              </p>
              <button className="bg-white text-[#FF6B00] px-8 py-3 rounded-lg font-semibold hover:bg-orange-50 transition-colors duration-200 transform hover:scale-105">
                {slide.cta}
              </button>
            </div>
            <div className="w-1/2 h-full">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-full object-cover opacity-20"
              />
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white bg-opacity-20 hover:bg-opacity-30 text-white p-2 rounded-full transition-all duration-200"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Dot indicators - exact specifications: 8px diameter, 12px spacing */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              index === currentSlide ? 'bg-[#FF6B00]' : 'bg-[#D9D9D9]'
            }`}
            style={{ marginRight: index < slides.length - 1 ? '12px' : '0' }}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;
