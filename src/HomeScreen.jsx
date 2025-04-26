import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

const HomeScreen = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleProfileMenu = () => setIsProfileMenuOpen(!isProfileMenuOpen);

  return (
    <div className="flex flex-col min-h-screen bg-white text-pink-700 font-sans vareza-theme relative">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-200 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 relative">
            {/* Logo */}
            <div className="flex items-center space-x-4">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/4/42/YouTube_icon_%282013-2017%29.png"
                alt="Logo"
                className="w-8 h-8"
              />
            </div>

            {/* Search Bar */}
            <div className="hidden sm:block absolute left-1/2 transform -translate-x-1/2 w-full max-w-xl px-4">
              <input
                type="text"
                placeholder="Pesquisar vídeos, canais..."
                className="w-full px-5 py-2 rounded-md bg-pink-50 text-sm placeholder-pink-400 text-pink-700 focus:outline-none focus:ring-2 focus:ring-pink-400 transition"
              />
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4">
              <button
                onClick={() => navigate('/search')}
                className="sm:hidden text-2xl text-pink-600 hover:text-pink-500 transition"
              >
                🔍
              </button>

              <button className="text-2xl text-pink-600 hover:text-pink-500 transition">
                🔔
              </button>

              <div className="relative">
                <button
                  onClick={toggleProfileMenu}
                  className="text-2xl text-pink-600 hover:text-pink-500 transition"
                >
                  👤
                </button>

                <AnimatePresence>
                  {isProfileMenuOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="absolute right-0 mt-2 w-64 bg-white border border-pink-200 rounded-lg shadow-lg py-4 z-50"
                    >
                      <div className="px-6 pb-4 border-b border-pink-200">
                        <p className="text-pink-700 font-semibold text-lg">Bem-vindo!</p>
                        <p className="text-pink-500 text-sm">Acesse sua conta ou crie uma nova.</p>
                      </div>
                      <div className="flex flex-col px-6 py-4 space-y-2">
                        <button
                          onClick={() => navigate('/login')}
                          className="w-full bg-pink-500 hover:bg-pink-400 text-white font-semibold py-2 rounded-md transition"
                        >
                          Fazer Login
                        </button>
                        <button
                          onClick={() => navigate('/register')}
                          className="w-full border border-pink-500 hover:bg-pink-100 text-pink-500 font-semibold py-2 rounded-md transition"
                        >
                          Criar Conta
                        </button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={toggleMenu}
                className="text-2xl text-pink-600 hover:text-pink-500 transition"
              >
                ☰
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Animated Menu */}
      {/* Menu Animated */}
<AnimatePresence>
  {isMenuOpen && (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -100, opacity: 0 }}
      className="absolute top-16 left-0 w-full bg-white shadow-md border-b border-pink-200 z-40"
    >
      <div className="max-w-7xl mx-auto px-4 py-6 grid grid-cols-2 sm:grid-cols-4 gap-4">
        {['Página Inicial', 'Explorar', 'Inscrições', 'Biblioteca', 'Histórico', 'Seus Vídeos', 'Configurações', 'Ajuda'].map((item, idx) => (
          <div
            key={idx}
            onClick={() => {
              if (item === 'Configurações') {
                navigate('/settings'); // Navega para Configurações
              }
            }}
            className="bg-pink-50 p-4 rounded-lg hover:bg-pink-100 cursor-pointer shadow"
          >
            <p className="text-center font-semibold text-pink-700">{item}</p>
          </div>
        ))}
      </div>
    </motion.div>
  )}
</AnimatePresence>


      {/* Main Content */}
      <main className="flex-1 p-4 bg-pink-50 mt-4">
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {/* Videos */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white p-4 text-center text-sm text-pink-500 border-t border-pink-200">
        <p>© 2025 NextTube. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default HomeScreen;