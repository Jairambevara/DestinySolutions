import './App.css';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Pages/dashboard';
import Home from './Pages/Home';
import ResturantHome from './Pages/Resturant/resturant-homepage';
import ResturantMenu from './Pages/Resturant/resturant-menu';
import ResturantCart from './Pages/Resturant/resturant-cart'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/ResturantHome" element={<ResturantHome />} />
      <Route path="/ResturantMenu" element={<ResturantMenu />} />
      <Route path="/ResturantCart" element={<ResturantCart />} />
    </Routes>
  );
}

export default AppRoutes;
