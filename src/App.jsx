import { Routes, Route } from 'react-router-dom';
import HomeScreen from './HomeScreen';
import SearchHistoryScreen from './SearchHistoryScreen';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomeScreen />} />
      <Route path="/search" element={<SearchHistoryScreen />} />
    </Routes>
  );
}

export default App;
