import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DiaryPage from './DiaryPage';
import BudgetPage from './BudgetPage';
import Navigation from '../components/common/Navigation';

const Dashboard: React.FC = () => {
  return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<div>Welcome to the Diary!</div>} />
        <Route path="/diary" element={<DiaryPage />} />
        <Route path="/budget" element={<BudgetPage />} />
      </Routes>
    </>
  );
};

export default Dashboard;
