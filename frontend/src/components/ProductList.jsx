import React, { useState, useEffect } from 'react';
import styles from '../styles/Product.style.js';
const API_URL = 'http://localhost:3000/products';


export default function ProductList () {

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetchProducts();
  }, [])


  const fetchProducts = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setProducts(data);
    } catch (err) {
      setError('Error al cargar productos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Gestión de Productos</h1>
        <button onClick={() => {}} style={styles.logoutBtn}>
          Cerrar Sesión
        </button>
      </header>
      
      {error && <div style={styles.errorBanner}>{error}</div>}
    

      <div style={styles.tableContainer}>
        <h2>Lista de Productos</h2>
        {loading ? (
          <p>Cargando...</p>
        ) : (
          <table style={styles.table}>
            <thead>
              <tr>
                <th style={styles.th}>ID</th>
                <th style={styles.th}>Nombre</th>
                <th style={styles.th}>Precio</th>
                <th style={styles.th}>Stock</th>
                <th style={styles.th}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} style={styles.tr}>
                  <td style={styles.td}>{product.id}</td>
                  <td style={styles.td}>{product.name}</td>
                  <td style={styles.td}>${product.price}</td>
                  <td style={styles.td}>{product.stock}</td>
                  <td style={styles.td}>
                    <button onClick={() => {}} style={styles.editBtn}>
                      Editar
                    </button>
                    <button onClick={() => {}} style={styles.deleteBtn}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}