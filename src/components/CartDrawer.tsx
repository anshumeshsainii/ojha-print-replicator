
import React from 'react';
import { X, Minus, Plus, Trash2 } from 'lucide-react';
import { useCartStore } from '../store/cartStore';

const CartDrawer = () => {
  const { items, isOpen, toggleCart, updateQuantity, removeItem } = useCartStore();
  
  const subtotal = items.reduce((total, item) => total + (item.price * item.quantity), 0);

  const handleWhatsAppCheckout = () => {
    const message = `Hi Ojha Printing Press, I want to order:\n${items.map(item => 
      `• ${item.quantity}× ${item.name} (₹${item.price})`
    ).join('\n')}\nTotal: ₹${subtotal}`;
    
    const whatsappUrl = `https://wa.me/917379340224?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop with 4px blur */}
      <div 
        className="fixed inset-0 bg-black bg-opacity-50 z-40 backdrop-blur-[4px]"
        onClick={toggleCart}
      />
      
      {/* Cart Drawer - 0.3s ease-out from right */}
      <div className={`fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-xl z-50 transform transition-transform duration-300 ease-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}>
        <div className="flex flex-col h-full">
          {/* Header */}
          <div className="flex items-center justify-between p-4 border-b">
            <h2 className="text-lg font-semibold">Shopping Cart ({items.length})</h2>
            <button
              onClick={toggleCart}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200 border border-[#E5E5E5]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Cart Items */}
          <div className="flex-1 overflow-y-auto p-4">
            {items.length === 0 ? (
              <div className="text-center text-gray-500 mt-8">
                <p>Your cart is empty</p>
                <button
                  onClick={toggleCart}
                  className="mt-4 text-[#FF6B00] hover:text-[#E05B00] font-medium"
                >
                  Continue Shopping
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                {items.map((item) => (
                  <div key={item.id} className="flex items-center space-x-4 p-4 border rounded-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-16 h-16 object-cover rounded"
                      style={{ aspectRatio: '1/1.25' }}
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-800">{item.name}</h3>
                      {item.variant && (
                        <p className="text-sm text-gray-500">{item.variant}</p>
                      )}
                      <p className="font-semibold text-[#FF6B00] text-lg" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 600 }}>₹{item.price}</p>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center">{item.quantity}</span>
                      <button
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="p-1 hover:bg-gray-100 rounded"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="p-2 text-red-500 hover:bg-red-50 rounded"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Footer */}
          {items.length > 0 && (
            <div className="border-t p-4 space-y-4">
              <div className="flex items-center justify-between text-lg font-semibold">
                <span>Subtotal:</span>
                <span>₹{subtotal}</span>
              </div>
              <button
                onClick={handleWhatsAppCheckout}
                className="w-full bg-[#FF6B00] hover:bg-[#E05B00] text-white py-3 px-4 rounded-lg font-medium transition-colors duration-200"
              >
                Proceed to WhatsApp Checkout
              </button>
              <p className="text-xs text-gray-500 text-center">
                You'll be redirected to WhatsApp to complete your order
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default CartDrawer;
