import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/dashboard';
import Home from './Pages/Home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default AppRoutes;
