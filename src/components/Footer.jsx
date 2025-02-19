import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full h-screen flex items-center justify-center">
      <div className="text-center px-4">
        <p className="text-lg md:text-xl lg:text-3xl font-medium text-gray-900 mb-6">
          Drippit—Find Your Drip, Swipe Your Style.
        </p>
        
        <div className="flex justify-center space-x-6 mb-6">
          <a href="https://instagram.com" aria-label="Instagram" className="text-gray-900 hover:text-gray-500 transition-colors">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
            </svg>
          </a>
          <a href="https://twitter.com" aria-label="Twitter/X" className="text-gray-900 hover:text-gray-500 transition-colors">
            <svg className="w-10 h-10" viewBox="0 0 24 24" fill="currentColor">
              <path d="M13.6823 10.6218L20.2391 3H18.6854L12.9921 9.61788L8.44486 3H3.2002L10.0765 13.0074L3.2002 21H4.75404L10.7663 14.0113L15.5685 21H20.8131L13.6819 10.6218H13.6823ZM11.5541 13.0956L10.8574 12.0991L5.31391 4.16971H7.70053L12.1742 10.5689L12.8709 11.5655L18.6861 19.8835H16.2995L11.5541 13.096V13.0956Z" />
            </svg>
          </a>
        </div>
        
        <div className="flex flex-col md:flex-row justify-center items-center text-sm md:text-xl text-gray-500 mb-2">
          <a href="/privacy" className="mx-2 hover:text-gray-400 transition-colors">
            Privacy Policy
          </a>
          <span className="hidden md:inline mx-1">|</span>
          <a href="/terms" className="mx-2 hover:text-gray-400 transition-colors">
            Terms of Service
          </a>
          <span className="hidden md:inline mx-1">|</span>
          <a href="/contact" className="mx-2 hover:text-gray-400 transition-colors">
            Contact Us
          </a>
        </div>
        
        <p className="text-sm text-amber-50">
          Copyright 2025. All Rights Reserved
        </p>
      </div>
    </footer>
  );
};

export default Footer;