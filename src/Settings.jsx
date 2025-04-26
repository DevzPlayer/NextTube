import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Settings = () => {
  const navigate = useNavigate();

  // Carrega o tema preferido do localStorage, se disponível
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true'; // Se o valor for 'true', ativa o modo escuro
  });

  // Função para alternar entre modo claro e escuro
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => {
      const newMode = !prevMode;
      localStorage.setItem('darkMode', newMode.toString()); // Salva a preferência no localStorage
      return newMode;
    });
  };

  // Salva configurações (exemplo)
  const handleSaveSettings = () => {
    alert('Configurações salvas!');
  };

  // Atualiza o tema na renderização do componente
  useEffect(() => {
    // Aplica a classe 'dark' ou 'light' no body para afetar o tema global
    if (isDarkMode) {
      document.body.setAttribute('data-theme', 'dark');
    } else {
      document.body.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div
      className={`flex flex-col min-h-screen ${
        isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-pink-700'
      } font-sans`}
    >
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-pink-200 shadow-sm">
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

            {/* Title */}
            <h1 className="text-xl font-semibold text-pink-700">Configurações</h1>

            {/* Back Button */}
            <button
              onClick={() => navigate('/')}
              className="text-pink-600 hover:text-pink-500 transition"
            >
              Voltar
            </button>
          </div>
        </div>
      </header>

      {/* Settings Content */}
      <main className="flex-1 p-4 bg-pink-50 space-y-8">
        <motion.div
          className="p-6 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl text-pink-700 mb-4">Tema</h2>
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleDarkMode}
              className={`py-2 px-4 rounded-md ${
                isDarkMode ? 'bg-pink-600 text-white' : 'bg-pink-100 text-pink-600'
              } transition`}
            >
              {isDarkMode ? 'Modo Claro' : 'Modo Escuro'}
            </button>
          </div>
        </motion.div>

        <motion.div
          className="p-6 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl text-pink-700 mb-4">Notificações</h2>
          <div className="flex items-center space-x-4">
            <input
              type="checkbox"
              className="text-pink-600"
              id="notifications"
            />
            <label htmlFor="notifications" className="text-sm text-pink-700">
              Habilitar notificações
            </label>
          </div>
        </motion.div>

        <motion.div
          className="p-6 bg-white rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-xl text-pink-700 mb-4">Salvar</h2>
          <button
            onClick={handleSaveSettings}
            className="w-full bg-pink-500 hover:bg-pink-400 text-white font-semibold py-2 rounded-md transition"
          >
            Salvar Configurações
          </button>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-white p-4 text-center text-sm text-pink-500 border-t border-pink-200">
        <p>© 2025 NextTube. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Settings;
