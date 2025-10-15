// Pruebas unitaria para las rutas de productos

/* global describe, it, expect */

const req = require('supertest')
const express = require('express')
const productRoutes = require('../../src/routes/productRoutes')

const app = express()
app.use(express.json())

describe('Product Routes', () => {
  it('Deberia tener la ruta GET /', async () => {
    expect(productRoutes.stack.some(layer =>
      layer.route && layer.route.path === '/' && layer.route.methods.get)
    ).toBe(true)
  })

  it('Deberia tener la ruta POST /', async () => {
    expect(productRoutes.stack.some(layer =>
      layer.route && layer.route.path === '/' && layer.route.methods.post)
    ).toBe(true)
  })

  it('Deberia tener la ruta PUT /:id', async () => {
    expect(productRoutes.stack.some(layer =>
      layer.route && layer.route.path === '/:id' && layer.route.methods.put)
    ).toBe(true)
  })

  it('Deberia tener la ruta DELETE /:id', async () => {
    expect(productRoutes.stack.some(layer =>
      layer.route && layer.route.path === '/:id' && layer.route.methods.delete)
    ).toBe(true)
  })

  it('Deberia responder 200 en GET /products', async () => {
    app.use('/products', productRoutes)
    const response = await req(app).get('/products')
    expect(response.status).toBe(200)
  })

  it('Deberia responder 400 en POST /products sin nombre y precio', async () => {
    app.use('/products', productRoutes)
    const response = await req(app).post('/products').send({ description: 'test' })
    expect(response.status).toBe(400)
  })

  it('Deberia responder 201 en POST /products con datos validos', async () => {
    app.use('/products', productRoutes)
    const response = await req(app).post('/products').send({ name: 'Test', price: 10.5, description: 'test' })
    expect(response.status).toBe(201)
  })
})
