import React from 'react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const IntroScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-sm dark:bg-gray-900/70 border-b border-gray-200 dark:border-gray-700 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 relative">
            {/* Esquerda: Logo */}
            <div className="flex items-center space-x-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                alt="Logo"
                className="w-8 h-8"
              />
            </div>

            {/* Centro: Barra de pesquisa (desktop) */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-full max-w-xl px-4">
              <input
                type="text"
                placeholder="Pesquisar vídeos, canais..."
                className="w-full px-5 py-2 rounded-md bg-gray-100 dark:bg-gray-800 text-sm placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
              />
            </div>

            {/* Direita: Ícones */}
            <div className="flex items-center space-x-4">
              {/* Lupa (mobile) */}
              <button
                onClick={() => navigate('/search')}
                className="sm:hidden text-xl text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                🔍
              </button>

              {/* Menu hamburguer */}
              <button
                onClick={() => {}}
                className="text-xl text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                ☰
              </button>

              {/* Toggle modo escuro (desktop) */}
              <div className="hidden sm:block">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 p-4 flex justify-center items-center bg-gray-100 dark:bg-gray-800">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Bem-vindo ao NextTube
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-6">
            Seu novo espaço para explorar vídeos e muito mais.
          </p>
          <div className="space-x-4">
            <button
              onClick={() => navigate('/login')}
              className="bg-indigo-500 text-white font-semibold py-2 px-6 rounded-md hover:bg-indigo-600 transition"
            >
              Fazer Login
            </button>
            <button
              onClick={() => navigate('/register')}
              className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white font-semibold py-2 px-6 rounded-md hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              Criar Conta
            </button>
          </div>
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-white dark:bg-gray-900 p-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <p>© 2025 NextTube. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default IntroScreen;
