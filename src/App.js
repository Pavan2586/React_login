// src/App.js
import React from 'react';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import Singup from './Signup';
import Login from './Login';
import Forget from './Forget';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Signup" element={<Singup />} />
        <Route path="/Forget" element={<Forget />} />
        {/* Add more routes here */}
      </Routes>
    </BrowserRouter>
  );
}

export default App; // Add this line to export the App component as default