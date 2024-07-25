'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { useState } from 'react';
import { ThemeToggle } from '@/components/theme-toggle';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faInfoCircle, faCogs, faEnvelope, faSearch, faInfo } from '@fortawesome/free-solid-svg-icons';

const navItems = [
  { path: '/', title: 'Home', icon: faHome },
  { path: '/about', title: 'About', icon: faInfoCircle },
  { path: '/services', title: 'Services', icon: faCogs },
  { path: '/contact', title: 'Contact', icon: faEnvelope },

];

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  // const { navigation } = await getDictionary(lang)

  const pathname = usePathname();

  return (
    <header className="flex items-center justify-between py-2 px-4 ">
      <div className="flex items-center">
        <div className="mr-3">
          {/* Replace with your logo */}
         
        </div>
      </div>
      <div className="hidden sm:flex items-center space-x-4">
        <motion.nav
          className="flex space-x-4"
          initial={{ opacity: 0, y: -60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
        >
          {navItems.map((item, index) => {
            const isActive = pathname === item.path;
            return (
              <Link key={index} href={item.path} legacyBehavior>
                <a
                  className={`block py-2 px-4 rounded-md font-semibold transition duration-300 ${
                    isActive ? 'text-orange-600' : 'hover:text-indigo-300 hover:delay-300'
                  }`}
                >
                  {item.title}
                </a>
              </Link>
            );
          })}
        </motion.nav>
        <FontAwesomeIcon icon={faSearch} className="hover:text-primary-500 cursor-pointer" />
        <ThemeToggle />
      </div>
      <button onClick={toggleMenu} className="sm:hidden">
        {/* Menu icon for mobile */}
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
        </svg>
      </button>
      {isMenuOpen && (
        <div className="sm:hidden absolute top-16 left-0 right-0 bg-gray-900 text-white">
          <motion.nav
            className="flex-col space-y-2 p-4"
            initial={{ opacity: 0, y: -60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            {navItems.map((item, index) => {
              const isActive = pathname === item.path;
              return (
                <Link key={index} href={item.path} legacyBehavior>
                  <a
                    className={`block py-2 px-4 rounded-md font-semibold transition duration-300 ${
                      isActive ? 'text-orange-600' : 'hover:text-indigo-300 hover:delay-300'
                    }`}
                    onClick={toggleMenu}
                  >
                    {item.title}
                  </a>
                </Link>
              );
            })}
            <div className="flex justify-between items-center py-2 px-4">
              <FontAwesomeIcon icon={faSearch} className="hover:text-primary-500 cursor-pointer" />
              <ThemeToggle />
            </div>
          </motion.nav>
        </div>
      )}
    </header>
  );
}
