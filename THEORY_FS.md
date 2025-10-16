# Responde brevemente:
## 1. ¿Qué diferencia hay entre useState y useEffect?
```
UseState es el hook de react para manejar los estados que es le corazón de la programación reactiva, este almacena objetos que pueden cambiar y hacer cambio en el UI

el UseEffect permite ejecutar los efectos secundarios y para sincronizacion de elementos terceros y tambien de datos que ya se renderizaron y que necesitan una actualización
```


## 2. ¿Qué ventajas tiene separar componentes en React?
```
Es parte de la modularización  y nos permite tener mas organizado nuestro código y poder reutilizar, nos permite poder leerlo mejor entenderlo mejor y ademas se hace mas mantenible, y usar un patron de arquitectura de software para esta organizacion y separacion. 
```


## 3. ¿Cómo manejarías el estado global?
```
Depende del ciclo de vida de la aplicacion ademas de cuanta informacion vamos a manejar. 

por ejemplo una app pequeña que solo guarde unos 100 registros y sea listados, podemos usar un local storage y context API. 

si es algo mas grande en cuanto a manejp de datos y con ciclo de vida corto con Zustand es mas que suficiente. 

pero si es algo mas grande podemos usar redux ya que esta muy completo para manejar toda la app ya que su arquitectura es horizontal y tiene todos los tools para poder manejar todos los estados
```


## 4. ¿Qué ventajas ofrece Express sobre Node puro?
```
primero Express es mas sencillo que node solo. 
Es mas intuitivo,
el manejo de middlewares es mas automatico que solo con node. 
ademas se puede incorporar las plantillas para hacer render de vistas. 
Soluciona la complejidad del routing y los accesos 
```


## 5. ¿Qué es una API REST y qué buenas prácticas aplicas para su diseño?
```
Es la interface para poder conectar aplicaciones y las mas usada en la actualidad. 

las buenas practicas es poner los verbos y no usar todo en post. 
tambien poner los status correctos y nos poner unos solo para errores. 

tambien paginar para obtener JSON mas precisos o mas cortos ya que a veces son millones de registros
```




