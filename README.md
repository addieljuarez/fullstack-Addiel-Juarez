## fullstack Addiel Juárez

## 1. Requisitos previos
* Node.js versión mínima requerida
* npm o yarn

``` bash
node --version  # 16.20.2
npm --verison # 8.19.4

# en el package.json del backend
"engines": {
  "npm": ">=8.0.0 <9.0.0",
  "node": ">=16.0.0 <17.0.0"
}

```


## 2. Instrucciones de instalación y ejecución

### Comandos para instalar dependencias (npm install)
```bash
# dentro del proyecto ejecutamos este comando para 

cd backend && npm install && cd .. && cd frontend && npm install
```
### Comando para ejecutar en desarrollo (npm run dev)
```bash
# en el backend 
# se usa nodemon
cd backend && npm run dev

# en el frontend 
cd frontend && npm run dev
```

### Puerto o URL base (http://localhost:3000)
```bash
# en el backend esta aplicado esta url base
```
- [x] http://localhost:3000 → aplicado backend
- [x] http://localhost:5173 → aplicado frontend


## Descripción de endpoints principales (GET, POST, PUT, DELETE)

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


## 3. Variables de entorno
* Cada proyecto tiene un .env.example explicado
```
backend/
├── src/
│   ├──
├── package.json
├── .env
└── .env.example
```
```
frontend/
│ 
│   
├── package.json
├── .env
└── .env.example
```

### 4. Explicación del funcionamiento
* Se desarrollar una pequeña aplicación que permita listar, crear, editar y eliminar productos
* conectándose a una API en Node.js.
* el fronend se conecta al backend y hace todas la operaciones del crud

![alt text](https://github.com/addieljuarez/fullstack-Addiel-Juarez/blob/develop/frontend/screen1.png)
![alt text](https://github.com/addieljuarez/fullstack-Addiel-Juarez/blob/develop/frontend/screen2.png)

5. Scripts útiles
- [x] npm run dev → modo desarrollo
- [x] npm test → ejecutar pruebas (solo en backend hay unos demos de test)
- [x] npm run build → compilar frontend