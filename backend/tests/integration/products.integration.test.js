/* global describe, it, expect, jest, beforeAll, beforeEach, afterAll */
const request = require('supertest')
const app = require('../../src/app')
const { setupTestDatabase, clearTestDatabase, closeTestDatabase } = require('../setup')

// Mock de la base de datos
jest.mock('../../src/config/database', () => {
  return require('../setup').testDb
})

describe('Products API Integration Tests', () => {
  beforeAll(async () => {
    await setupTestDatabase()
  })

  beforeEach(async () => {
    await clearTestDatabase()
  })

  afterAll(async () => {
    await closeTestDatabase()
  })

  describe('POST /products', () => {
    it('debería crear un producto exitosamente', async () => {
      const newProduct = {
        name: 'prod1',
        price: 999.99,
        description: 'prod1 gaming'
      }

      const response = await request(app)
        .post('/products')
        .send(newProduct)
        .expect(201)

      expect(response.body.name).toBe(newProduct.name)
      expect(response.body.price).toBe(newProduct.price)
      expect(response.body.description).toBe(newProduct.description)
    })

    it('debería crear un producto sin descripción', async () => {
      const newProduct = {
        name: 'prod1',
        price: 29.99
      }

      const response = await request(app)
        .post('/products')
        .send(newProduct)
        .expect(201)

      // expect(response.body).toHaveProperty('id');
      expect(response.body.name).toBe(newProduct.name)
      expect(response.body.price).toBe(newProduct.price)
    })

    it('debería retornar 400 si falta el nombre', async () => {
      const invalidProduct = {
        price: 999.99
      }

      const response = await request(app)
        .post('/products')
        .send(invalidProduct)
        .expect(400)

      expect(response.body).toHaveProperty('error')
      expect(response.body.error).toContain('obligatorios')
    })

    it('debería retornar 400 si falta el precio', async () => {
      const invalidProduct = {
        name: 'prod1'
      }

      const response = await request(app)
        .post('/products')
        .send(invalidProduct)
        .expect(400)

      expect(response.body).toHaveProperty('error')
      expect(response.body.error).toContain('obligatorios')
    })

    it('debería retornar 400 si el precio es 0', async () => {
      const invalidProduct = {
        name: 'prod1',
        price: 0
      }

      const response = await request(app)
        .post('/products')
        .send(invalidProduct)
        .expect(400)

      expect(response.body).toHaveProperty('error')
      expect(response.body.error).toContain('Los Campos de Nombre y precio son obligatorio')
    })

    it('debería retornar 400 si el precio es negativo', async () => {
      const invalidProduct = {
        name: 'Laptop',
        price: -10
      }

      const response = await request(app)
        .post('/products')
        .send(invalidProduct)
        .expect(400)

      expect(response.body).toHaveProperty('error')
      expect(response.body.error).toContain('mayor a 0')
    })
  })

  describe('GET /products', () => {
    it('debería retornar un array vacío si no hay productos', async () => {
      const response = await request(app)
        .get('/products')
        .expect(200)

      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body.length).toBe(0)
    })

    it('debería retornar todos los productos', async () => {
      // Crear productos de prueba
      await request(app)
        .post('/products')
        .send({ name: 'Producto 1', price: 100 })

      await request(app)
        .post('/products')
        .send({ name: 'Producto 2', price: 200 })

      const response = await request(app)
        .get('/products')
        .expect(200)

      expect(Array.isArray(response.body)).toBe(true)
      expect(response.body.length).toBe(2)
      expect(response.body[0].name).toBe('Producto 1')
      expect(response.body[1].name).toBe('Producto 2')
    })
  })
})
