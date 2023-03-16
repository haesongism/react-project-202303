import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './pages/Main';
import Jeon from './pages/Jeon';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/jeon" element={<Jeon />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
