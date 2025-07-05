
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import MobileCallButton from '../components/MobileCallButton';

const BusinessCardSubcategories = () => {
  const navigate = useNavigate();

  const subcategories = [
    {
      id: 1,
      name: "Standard Business Cards",
      description: "Professional business cards with standard finishes",
      icon: "💼",
      gradient: "from-blue-400 to-blue-600",
    },
    {
      id: 2,
      name: "Premium Business Cards",
      description: "Luxury business cards with premium materials",
      icon: "✨",
      gradient: "from-purple-400 to-purple-600",
    },
    {
      id: 3,
      name: "Matt Finish Cards",
      description: "Elegant matt finish business cards",
      icon: "🎨",
      gradient: "from-gray-400 to-gray-600",
    },
    {
      id: 4,
      name: "Glossy Finish Cards",
      description: "Shiny glossy finish business cards",
      icon: "✨",
      gradient: "from-green-400 to-green-600",
    },
    {
      id: 5,
      name: "Textured Cards",
      description: "Unique textured business cards",
      icon: "🔍",
      gradient: "from-orange-400 to-orange-600",
    },
    {
      id: 6,
      name: "Metallic Cards",
      description: "Stunning metallic finish business cards",
      icon: "🏆",
      gradient: "from-yellow-400 to-yellow-600",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="pt-[72px] md:pt-[72px] sm:pt-[60px]">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Business Card Categories
            </h1>
            <p className="text-lg text-gray-600">
              Choose from our wide range of business card options
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subcategories.map((subcategory) => (
              <div
                key={subcategory.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer"
                onClick={() => navigate(`/business-cards/${subcategory.id}`)}
              >
                <div className={`bg-gradient-to-br ${subcategory.gradient} relative w-full h-[200px] flex flex-col items-center justify-center text-white`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {subcategory.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.25)' }}>
                      {subcategory.name}
                    </h3>
                    <p className="text-sm opacity-90 mb-4 px-4" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.25)' }}>
                      {subcategory.description}
                    </p>
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                      View Products
                    </button>
                  </div>
                  
                  <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
      <CartDrawer />
      <MobileCallButton />
    </div>
  );
};

export default BusinessCardSubcategories;
