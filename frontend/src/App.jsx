import Login from './components/Login.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ProductsList from './components/ProductList.jsx';
import PrivateRoute from './components/PrivateRoute.jsx'; 

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ruta pública - Login */}
        <Route path="/login" element={<Login />} />
        
        {/* Ruta protegida - Productos */}
        <Route
          path="/products"
          element={
            <PrivateRoute>
              <ProductsList />
            </PrivateRoute>
          }
        />
        
        {/* Redirección por defecto */}
        <Route path="/" element={<Navigate to="/login" />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
