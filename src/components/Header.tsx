
import React, { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const { items, toggleCart } = useCartStore();
  
  const cartItemCount = items.reduce((total, item) => total + item.quantity, 0);

  const navigationItems = [
    { name: 'Home', href: '#' },
    { 
      name: 'Products', 
      href: '#',
      dropdown: [
        'Business Stationery',
        'Marketing Collaterals', 
        'Wedding Invitations',
        'Corporate Gifts',
        'Personalized Items'
      ]
    },
    { name: 'Track Order', href: '#' },
    { name: 'Stores', href: '#' },
    { name: 'Offers', href: '#' }
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-orange-600">
                Ojha Printing Press
              </h1>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navigationItems.map((item) => (
                  <div key={item.name} className="relative group">
                    <a
                      href={item.href}
                      className="text-gray-700 hover:text-orange-600 px-3 py-2 text-sm font-medium transition-colors duration-200"
                    >
                      {item.name}
                    </a>
                    {item.dropdown && (
                      <div className="absolute left-0 mt-2 w-56 bg-white rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
                        <div className="py-1">
                          {item.dropdown.map((subItem) => (
                            <a
                              key={subItem}
                              href="#"
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                            >
                              {subItem}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </nav>

            {/* Right Section */}
            <div className="flex items-center space-x-4">
              {/* Search */}
              <button
                onClick={() => setIsSearchOpen(!isSearchOpen)}
                className="p-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
              >
                <Search className="h-5 w-5" />
              </button>

              {/* Account */}
              <button className="p-2 text-gray-600 hover:text-orange-600 transition-colors duration-200">
                <User className="h-5 w-5" />
              </button>

              {/* Cart */}
              <button
                onClick={() => toggleCart()}
                className="relative p-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
              >
                <ShoppingCart className="h-5 w-5" />
                {cartItemCount > 0 && (
                  <span className="absolute -top-1 -right-1 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItemCount}
                  </span>
                )}
              </button>

              {/* Mobile menu button */}
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2 text-gray-600 hover:text-orange-600 transition-colors duration-200"
              >
                {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className="border-t bg-gray-50 px-4 py-3">
            <div className="max-w-7xl mx-auto">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
              />
            </div>
          </div>
        )}
      </header>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-40 md:hidden">
          <div className="fixed left-0 top-0 bottom-0 w-64 bg-white transform transition-transform duration-300 ease-out">
            <div className="p-4 border-b">
              <h2 className="text-lg font-semibold text-orange-600">Menu</h2>
            </div>
            <nav className="py-4">
              {navigationItems.map((item) => (
                <div key={item.name}>
                  <a
                    href={item.href}
                    className="block px-4 py-3 text-gray-700 hover:bg-orange-50 hover:text-orange-600"
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="pl-4 bg-gray-50">
                      {item.dropdown.map((subItem) => (
                        <a
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-600 hover:text-orange-600"
                        >
                          {subItem}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
