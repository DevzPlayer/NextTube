import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSun, faMoon } from '@fortawesome/free-solid-svg-icons';

const DarkModeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark', !isDarkMode);
  };

  return (
    <div className="flex items-center space-x-4">
      {/* Toggle com animação e formato moderno */}
      <button
        onClick={toggleMode}
        className="relative inline-flex items-center cursor-pointer w-14 h-8 bg-gray-300 dark:bg-gray-800 rounded-full"
      >
        <span
          className={`absolute left-1 top-1 w-6 h-6 bg-white rounded-full transition-transform transform ${
            isDarkMode ? 'translate-x-6' : ''
          }`}
        ></span>

        {/* Nuvem de dia (ícone de sol) */}
        <FontAwesomeIcon
          icon={faSun}
          className={`absolute left-2 text-yellow-400 transition-opacity duration-300 ${isDarkMode ? 'opacity-0' : 'opacity-100'}`}
        />

        {/* Lua com nuvens (ícone de lua) */}
        <FontAwesomeIcon
          icon={faMoon}
          className={`absolute right-2 text-gray-400 transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
        />
      </button>
    </div>
  );
};

export default DarkModeToggle;
