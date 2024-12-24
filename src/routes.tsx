// src/routes.tsx
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import DiaryPage from './pages/DiaryPage';
import BudgetPage from './pages/BudgetPage';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/diary" element={<DiaryPage />} />
      <Route path="/budget" element={<BudgetPage />} />
    </Routes>
  );
};

export default AppRoutes;