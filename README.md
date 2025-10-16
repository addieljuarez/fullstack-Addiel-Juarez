## fullstack Addiel Juárez

1. Requisitos previos
• Node.js versión mínima requerida
• npm o yarn

```
node --veriv16.20.2
```

### GET - Listar productos
```bash
curl http://localhost:3000/products
```

### POST - Crear producto
```bash
curl -X POST http://localhost:3000/products \
  -H "Content-Type: application/json" \
  -d '{"name":"product 1","price":999.99,"description":"produdct gaming"}'
```

### PUT - Actualizar producto
```bash
curl -X PUT http://localhost:3000/products/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"product 2 Pro","price":1299.99,"description":"produdct gaming pro"}'
```

### DELETE - Eliminar producto
```bash
curl -X DELETE http://localhost:3000/products/1
```