import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import SearchHistoryScreen from './SearchHistoryScreen';
import Login from './Login';
import Register from './Register';
import IntroScreen from './IntroScreen';
import Settings from './Settings'; // Importe o componente Settings

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loggedInStatus = localStorage.getItem('loggedIn');
    setIsLoggedIn(loggedInStatus === 'true');
  }, []);

  return (
    <Routes>
      {/* Página inicial: se logado, vai para HomeScreen, caso contrário, IntroScreen */}
      <Route path="/" element={isLoggedIn ? <HomeScreen /> : <IntroScreen />} />

      {/* Rota para login */}
      <Route path="/login" element={<Login />} />

      {/* Rota para registro */}
      <Route path="/register" element={<Register />} />

      {/* Rota para histórico de pesquisa */}
      <Route path="/search" element={<SearchHistoryScreen />} />

      {/* Rota para configurações */}
      <Route path="/settings" element={<Settings />} /> {/* Adiciona a rota de Settings */}
    </Routes>
  );
};

export default App;
