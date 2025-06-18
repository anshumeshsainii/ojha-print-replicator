
import React from 'react';
import { Phone } from 'lucide-react';

const MobileCallButton = () => {
  const handleCall = () => {
    window.open('tel:+917379340224', '_self');
  };

  return (
    <button
      onClick={handleCall}
      className="fixed bottom-4 right-4 md:hidden bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg z-40 transition-all duration-200 transform hover:scale-110 active:scale-95"
    >
      <Phone className="h-6 w-6" />
    </button>
  );
};

export default MobileCallButton;
