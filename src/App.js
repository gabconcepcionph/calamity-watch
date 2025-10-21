import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useNavigate, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Calamities from './pages/Calamities';
import Volunteers from './pages/Volunteers';
import Inventories from './pages/Invetories';
import AskForHelp from './pages/AskForHelp';

const AppRoutes = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const redirect = params.get('redirect');

    if (!redirect) {
      return;
    }

    if (!redirect.startsWith('/')) {
      return;
    }

    navigate(redirect, { replace: true });
  }, [location.search, navigate]);

  return (
    <Routes>
      <Route path="/" element={<Calamities />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/calamities" element={<Calamities />} />
      <Route path="/volunteers" element={<Volunteers />} />
      <Route path="/inventories" element={<Inventories />} />
      <Route path="/ask-for-help" element={<AskForHelp />} />
    </Routes>
  );
};

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <AppRoutes />
    </BrowserRouter>
  );
};

export default App;
