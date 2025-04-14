import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DarkModeToggle from './DarkModeToggle';

const HomeScreen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

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

              {/* Menu */}
              <button
                onClick={toggleMenu}
                className="text-xl text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition"
              >
                ☰
              </button>

              {/* Submenu */}
              {isMenuOpen && (
                <div className="absolute top-16 right-4 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg p-4 space-y-2 w-48 z-50">
                  <a href="#" className="block text-sm hover:text-indigo-500">Página Inicial</a>
                  <a href="#" className="block text-sm hover:text-indigo-500">Minha Conta</a>
                  <a href="#" className="block text-sm hover:text-indigo-500">Configurações</a>
                  <a href="#" className="block text-sm hover:text-indigo-500">Sair</a>
                </div>
              )}

              {/* Notificações */}
              <button className="text-xl text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                🔔
              </button>

              {/* Perfil */}
              <button className="text-xl text-gray-700 dark:text-gray-200 hover:text-indigo-600 dark:hover:text-indigo-400 transition">
                👤
              </button>

              {/* Toggle modo escuro (escondido no mobile) */}
              <div className="hidden sm:block">
                <DarkModeToggle />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Conteúdo principal */}
      <main className="flex-1 p-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Vídeos vão aqui */}
        </div>
      </main>

      {/* Rodapé */}
      <footer className="bg-white dark:bg-gray-900 p-4 text-center text-sm text-gray-500 dark:text-gray-400 border-t border-gray-200 dark:border-gray-700">
        <p>© 2025 NextTube. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomeScreen;
