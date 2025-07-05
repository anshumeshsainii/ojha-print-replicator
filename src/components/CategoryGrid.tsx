import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PhoneNumberForm from './PhoneNumberForm';

const CategoryGrid = () => {
  const navigate = useNavigate();
  const [showPhoneForm, setShowPhoneForm] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('');

  const categories = [
    {
      id: 1,
      name: "Business Cards",
      icon: "💼",
      gradient: "from-blue-400 to-blue-600",
      description: "Professional business cards"
    },
    {
      id: 2,
      name: "Letterheads",
      icon: "📄",
      gradient: "from-green-400 to-green-600",
      description: "Custom letterhead designs"
    },
    {
      id: 3,
      name: "Brochures",
      icon: "📋",
      gradient: "from-purple-400 to-purple-600",
      description: "Marketing brochures"
    },
    {
      id: 4,
      name: "Wedding Cards",
      icon: "💒",
      gradient: "from-pink-400 to-pink-600",
      description: "Beautiful wedding invitations"
    },
    {
      id: 5,
      name: "Posters",
      icon: "🎨",
      gradient: "from-orange-400 to-orange-600",
      description: "Eye-catching posters"
    },
    {
      id: 6,
      name: "Banners",
      icon: "🏳️",
      gradient: "from-red-400 to-red-600",
      description: "Large format banners"
    },
    {
      id: 7,
      name: "Stickers",
      icon: "🏷️",
      gradient: "from-teal-400 to-teal-600",
      description: "Custom stickers"
    },
    {
      id: 8,
      name: "Packaging",
      icon: "📦",
      gradient: "from-indigo-400 to-indigo-600",
      description: "Product packaging"
    }
  ];

  const handleCategoryClick = (category: any) => {
    if (category.name === "Business Cards") {
      setSelectedCategory(category.name);
      setShowPhoneForm(true);
    } else {
      // Handle other categories normally
      console.log(`Clicked on ${category.name}`);
    }
  };

  const handlePhoneFormSuccess = () => {
    navigate('/business-card-subcategories');
  };

  return (
    <>
      <section className="py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
              Our Services
            </h2>
            <p className="text-lg text-gray-600">
              Choose from our wide range of printing solutions
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {categories.map((category) => (
              <div
                key={category.id}
                className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 cursor-pointer w-[280px] h-[180px] mx-auto"
                onClick={() => handleCategoryClick(category)}
              >
                <div className={`bg-gradient-to-br ${category.gradient} relative w-full h-full flex flex-col items-center justify-center text-white`}>
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                      {category.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.25)' }}>
                      {category.name}
                    </h3>
                    <p className="text-sm opacity-90 mb-4" style={{ textShadow: '0px 2px 4px rgba(0,0,0,0.25)' }}>
                      {category.description}
                    </p>
                    <button className="bg-white bg-opacity-20 hover:bg-opacity-30 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100">
                      Explore Now
                    </button>
                  </div>
                  
                  <div className="absolute inset-0 bg-white bg-opacity-0 group-hover:bg-opacity-10 transition-all duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PhoneNumberForm
        isOpen={showPhoneForm}
        onClose={() => setShowPhoneForm(false)}
        category={selectedCategory}
        onSuccess={handlePhoneFormSuccess}
      />
    </>
  );
};

export default CategoryGrid;
