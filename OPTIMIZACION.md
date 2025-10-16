
# Describe un problema real (por ejemplo, “la tabla tardaba en renderizar al modificar el estado”).
# Incluye:

## 1. Descripción del problema
### Para una aplicacion movil en React Native en el backend tenian cada dia un costo mas grande, en GCP que tenian sus functions en Node. 


## 2. Qué hiciste para resolverlo
### tuve que revisar tanto Aplicacion como Backend para hacer implementaciones que bajaran los costos. ya que tenian como 5000 usuarios activos de paga, La solucion fue en los queries para las bases de datos. De realizaron las optimizaciones tanto en backend en las functions lambdas como en la Aplicacion se hizo un tipo lazy loading en el front y nuevas consultas a firebase 


## 3. Resultado o mejora observada
### Los costos bajaron de 8K dolares a 1K dolares de inmediato en cuanto se hizo la liberación de ambas partes, en 1 sprint por cada aplicación
