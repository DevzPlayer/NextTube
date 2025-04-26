import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchHistoryScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // Mock de histórico (substitua com localStorage ou banco depois)
  const searchHistory = [
    'React dark mode',
    'Tailwind layout',
    'Como clonar Netflix com React',
    'Anime openings top 10',
  ];

  const handleBack = () => {
    navigate(-1); // Voltar para a tela anterior
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white p-4">
      {/* Top bar com seta + input */}
      <div className="flex items-center space-x-2 mb-6">
        <button
          onClick={handleBack}
          className="text-2xl text-gray-600 dark:text-gray-300"
        >
          ←
        </button>
        <input
          type="text"
          autoFocus
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Pesquisar..."
          className="flex-1 px-4 py-2 rounded-md bg-gray-100 dark:bg-gray-800 placeholder-gray-500 dark:placeholder-gray-400"
        />
      </div>

      {/* Histórico */}
      <div className="space-y-3">
        {searchHistory
          .filter((item) =>
            item.toLowerCase().includes(searchTerm.toLowerCase())
          )
          .map((item, index) => (
            <div
              key={index}
              className="p-2 rounded-md bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition cursor-pointer"
            >
              {item}
            </div>
          ))}
      </div>
    </div>
  );
};

export default SearchHistoryScreen;
