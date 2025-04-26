import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [erro, setErro] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Aqui, você está buscando o usuário armazenado localmente
    const user = JSON.parse(localStorage.getItem('user'));

    if (user && user.email === email && user.senha === senha) {
      localStorage.setItem('loggedIn', 'true'); // Armazena o status de login
      navigate('/'); // Manda para a Home se o login for bem-sucedido
    } else {
      setErro('Email ou senha incorretos.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white dark:bg-gray-900">
      <div className="w-full max-w-md p-8 space-y-6 bg-white dark:bg-gray-800 shadow-md rounded-lg">
        <h2 className="text-center text-2xl font-bold text-gray-900 dark:text-white">Entrar</h2>
        {erro && <p className="text-red-500 text-sm">{erro}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="password"
            placeholder="Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-md bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <button
            type="submit"
            className="w-full bg-indigo-500 hover:bg-indigo-600 text-white font-semibold py-2 rounded-md transition"
          >
            Entrar
          </button>
        </form>
        <p className="text-sm text-center text-gray-600 dark:text-gray-400">
          Não tem uma conta?{' '}
          <button
            onClick={() => navigate('/register')}
            className="text-indigo-500 hover:underline"
          >
            Crie aqui
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
