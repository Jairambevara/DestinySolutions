import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/dashboard';
import Home from './Pages/Home';
import ResturantHome from './Pages/Resturant/resturant-homepage';
import ResturantMenu from './Pages/Resturant/resturant-menu';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ResturantHome" element={<ResturantHome />} />
      <Route path="/ResturantMenu" element={<ResturantMenu />} />
    </Routes>
  );
}

export default AppRoutes;
