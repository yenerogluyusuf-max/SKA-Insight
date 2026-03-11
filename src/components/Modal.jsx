import React, { useEffect } from 'react';
import { XIcon } from './Icons';

const Modal = ({ children, onClose, title, isOpen }) => {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4" 
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div 
        className="bg-blue-950 rounded-2xl shadow-2xl w-full max-w-3xl relative transform transition-all duration-300 ease-in-out scale-95 opacity-0 animate-fade-in-scale flex flex-col max-h-[90vh]" 
        onClick={e => e.stopPropagation()}
      >
        <div className="flex items-center justify-between p-6 border-b border-blue-800">
          <h3 id="modal-title" className="text-xl font-bold text-white">
            {title}
          </h3>
          <button 
            onClick={onClose} 
            className="text-blue-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-blue-400"
            aria-label="Close modal"
          >
            <XIcon />
          </button>
        </div>
        <div className="p-8 overflow-y-auto text-blue-200 leading-relaxed space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Modal;
