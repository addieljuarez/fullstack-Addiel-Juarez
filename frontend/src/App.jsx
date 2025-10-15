
// import React, { useState, useEffect } from 'react';
import Login from './components/Login.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública - Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Ruta protegida - Productos */}
        {/* <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductsPage />
            </PrivateRoute>
          }
        /> */}
        
        {/* Redirección por defecto */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
