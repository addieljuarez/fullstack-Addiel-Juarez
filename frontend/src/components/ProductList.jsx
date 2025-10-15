import React, { useState, useEffect } from 'react';
import styles from '../styles/Product.style.js';
import api from '../services/api.js';
import { useNavigate } from 'react-router-dom';



export default function ProductList () {

  const navigation = useNavigate();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [products, setProducts] = useState([]);
  const [editingProduct, setEditingProduct] = useState(null);
  const [productForm, setProductForm] = useState({ name: '', price: '', description: '' });

  useEffect(() => {
    fetchProducts();
  }, [])


  const fetchProducts = async () => {
    try {
      setLoading(true);
      setError('');
      const data = await api.get('/products');
      setProducts(data);
    } catch (err) {
      setError('Error al cargar productos');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('isAuthenticated');
    localStorage.removeItem('username');
    navigation('/login');
  };

  const handleDeleteProduct = async (id) => {
    if (window.confirm('¿Estás seguro de eliminar este producto?')) {
      try {
        await api.delete(`/products/${id}`);
        fetchProducts();
      } catch (err) {
        setError('Error al eliminar producto');
        console.error(err);
      }
    }
  };

  const handleSaveProduct = async (e) => {
    e.preventDefault();
    try {
      if (editingProduct) {
        await api.put(`/products/${editingProduct.id}`, productForm);
      } else {
        await api.post('/products', productForm);
      }
      setEditingProduct(null);
      setProductForm({ name: '', price: '', description: '' });
      fetchProducts();
    } catch (err) {
      setError('Error al guardar producto');
      console.error(err);
    }
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setProductForm({
      name: product.name,
      price: product.price,
      description: product.description
    });
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
    setProductForm({ name: '', price: '', description: '' });
  };



  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <h1>Gestión de Productos</h1>
        <button onClick={handleLogout} style={styles.logoutBtn}>
          Cerrar Sesión
        </button>
      </header>
      
      {error && <div style={styles.errorBanner}>{error}</div>}

      <div style={styles.formContainer}>
        <h3>{editingProduct ? 'Editar Producto' : 'Crear Producto'}</h3>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Nombre del producto"
            value={productForm.name}
            onChange={(e) => setProductForm({...productForm, name: e.target.value})}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="number"
            placeholder="Precio"
            value={productForm.price}
            onChange={(e) => setProductForm({...productForm, price: e.target.value})}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <input
            type="text"
            placeholder="Descripcion"
            value={productForm.description}
            onChange={(e) => setProductForm({...productForm, description: e.target.value})}
            style={styles.input}
          />
        </div>
        <div style={styles.formButtons}>
          <button onClick={handleSaveProduct} style={styles.button}>
            {editingProduct ? 'Actualizar' : 'Crear'}
          </button>
          {editingProduct && (
            <button onClick={handleCancelEdit} style={styles.cancelBtn}>
              Cancelar
            </button>
          )}
        </div>
      </div>
    

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
                <th style={styles.th}>Descripción</th>
                <th style={styles.th}>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {products.map(product => (
                <tr key={product.id} style={styles.tr}>
                  <td style={styles.td}>{product.id}</td>
                  <td style={styles.td}>{product.name}</td>
                  <td style={styles.td}>${product.price}</td>
                  <td style={styles.td}>{product.description}</td>
                  <td style={styles.td}>
                    <button onClick={() => handleEditProduct(product)} style={styles.editBtn}>
                      Editar
                    </button>
                    <button onClick={() => handleDeleteProduct(product.id)} style={styles.deleteBtn}>
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