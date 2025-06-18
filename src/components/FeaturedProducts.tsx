
import React from 'react';
import { ChevronLeft, ChevronRight, Heart } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const FeaturedProducts = () => {
  const { addItem } = useCartStore();
  
  const products = [
    {
      id: 1,
      name: "Premium Business Cards",
      price: 599,
      originalPrice: 799,
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=300&h=300&fit=crop",
      badge: "25% OFF"
    },
    {
      id: 2,
      name: "Corporate Letterhead",
      price: 299,
      originalPrice: 399,
      image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=300&h=300&fit=crop",
      badge: "BESTSELLER"
    },
    {
      id: 3,
      name: "Wedding Invitation Cards",
      price: 1299,
      originalPrice: 1599,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=300&fit=crop",
      badge: "NEW"
    },
    {
      id: 4,
      name: "Marketing Brochures",
      price: 799,
      originalPrice: 999,
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=300&h=300&fit=crop",
      badge: "20% OFF"
    },
    {
      id: 5,
      name: "Event Posters",
      price: 199,
      originalPrice: 299,
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=300&h=300&fit=crop",
      badge: "TRENDING"
    }
  ];

  const handleAddToCart = (product: any) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image
    });
  };

  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Best Sellers
            </h2>
            <p className="text-gray-600">
              Our most popular printing solutions
            </p>
          </div>
          <div className="flex space-x-2">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200">
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <button className="absolute top-3 right-3 p-2 bg-white rounded-full shadow-md hover:bg-red-50 hover:text-red-500 transition-colors duration-200">
                  <Heart className="h-4 w-4" />
                </button>
                {product.badge && (
                  <span className={`absolute top-3 left-3 px-2 py-1 text-xs font-semibold rounded-full ${
                    product.badge === 'BESTSELLER' ? 'bg-green-500 text-white' :
                    product.badge === 'NEW' ? 'bg-blue-500 text-white' :
                    product.badge === 'TRENDING' ? 'bg-purple-500 text-white' :
                    'bg-red-500 text-white'
                  }`}>
                    {product.badge}
                  </span>
                )}
              </div>
              
              <div className="p-4">
                <h3 className="font-semibold text-gray-800 mb-2 group-hover:text-orange-600 transition-colors duration-200">
                  {product.name}
                </h3>
                <div className="flex items-center space-x-2 mb-3">
                  <span className="text-lg font-bold text-gray-800">
                    ₹{product.price}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      ₹{product.originalPrice}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-orange-500 hover:bg-orange-600 text-white py-2 px-4 rounded-lg font-medium transition-all duration-200 transform hover:scale-105 active:scale-95"
                >
                  ADD TO CART
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
