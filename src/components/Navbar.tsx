'use client'
import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    setIsOpen(false); // Close mobile menu when clicking a link
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // height of navbar (h-16 = 64px)
      const elementPosition = element.offsetTop - navbarHeight;
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button onClick={() => scrollToSection('hero')} className="cursor-pointer text-xl font-bold text-gray-800">
              AUTOLIGAS
            </button>
          </div>
          
          {/* Mobile menu button */}
          <div className="flex items-center sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="cursor-pointer inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-8">
            <button onClick={() => scrollToSection('hero')} className="cursor-pointer text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
              Home
            </button>
            <button onClick={() => scrollToSection('featured')} className="cursor-pointer text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
              Parco auto
            </button>
            <button onClick={() => scrollToSection('services')} className="cursor-pointer text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
              Servizi
            </button>
            <button onClick={() => scrollToSection('contact')} className="cursor-pointer text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
              Contatti
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} sm:hidden`}>
        <div className="px-2 pt-2 pb-3 space-y-1">
          <button onClick={() => scrollToSection('hero')} className="cursor-pointer block w-full text-left text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
            Home
          </button>
          <button onClick={() => scrollToSection('featured')} className="cursor-pointer block w-full text-left text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
            Parco auto
          </button>
          <button onClick={() => scrollToSection('services')} className="cursor-pointer block w-full text-left text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
            Servizi
          </button>
          <button onClick={() => scrollToSection('contact')} className="cursor-pointer block w-full text-left text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md">
            Contatti
          </button>
        </div>
      </div>
    </nav>
  );
} 