import React from 'react';
import { ArrowUpIcon } from './Icons';

const ScrollToTopButton = ({ isVisible }) => (
  <button 
    onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} 
    className={`fixed bottom-8 right-8 w-12 h-12 rounded-full bg-white text-blue-950 flex items-center justify-center shadow-lg transform transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-400 hover:scale-110 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
    aria-label="Scroll to top"
  >
    <ArrowUpIcon />
  </button>
);

export default ScrollToTopButton;
