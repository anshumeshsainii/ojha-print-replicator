
import React from 'react';

const OfferBanners = () => {
  const offers = [
    {
      id: 1,
      title: "Corporate Gifts Upto 50% Off",
      subtitle: "Bulk orders starting from 100 pieces",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=300&fit=crop",
      cta: "Shop Now",
      bgColor: "from-purple-600 to-blue-600"
    },
    {
      id: 2,
      title: "Wedding Season Special",
      subtitle: "Free design consultation for orders above ₹5000",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=300&fit=crop",
      cta: "Get Quote",
      bgColor: "from-pink-500 to-red-500"
    }
  ];

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto space-y-8">
        {offers.map((offer) => (
          <div
            key={offer.id}
            className={`relative overflow-hidden rounded-2xl bg-gradient-to-r ${offer.bgColor} shadow-xl hover:shadow-2xl transition-all duration-300`}
          >
            <div className="flex items-center min-h-[200px]">
              <div className="w-full md:w-1/2 p-8 text-white">
                <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                  {offer.title}
                </h3>
                <p className="text-lg lg:text-xl mb-6 text-white text-opacity-90">
                  {offer.subtitle}
                </p>
                <button className="bg-white text-gray-800 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105">
                  {offer.cta}
                </button>
              </div>
              <div className="hidden md:block w-1/2">
                <img
                  src={offer.image}
                  alt={offer.title}
                  className="w-full h-64 object-cover opacity-20"
                />
              </div>
            </div>
            
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white bg-opacity-10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white bg-opacity-10 rounded-full translate-y-12 -translate-x-12"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OfferBanners;
