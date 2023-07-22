# API Template base usando Express JS

# Introducción 
Este template contiene la guía base para construir backends tipo API en Puntos Colombia. Está compuesto por:
1. NodeJS + Express JS (nativo)
2. ECMA Script 2020 (uso de módulos) - ESLINT
3. DotEnv para la carga de variables de entorno (mediante docker)
4. Uso de swagger con generación automática de endpoints y documentación semi-automática para el contenido de cada uno
5. Uso de newrelic v9.9.0 como lo indican los lineamientos de Puntos Colombia
6. Uso de splunk siguiendo los lineamientos de Puntos Colombia
7. Uso de docker para la contenerización de la aplicación
8. Uso de Jest para pruebas unitarias y de integración.
9. Uso de Clean Architecture orientada a la optimización de tiempos de respuesta y con el uso de patrones de diseños.

<br>

# Antes de Empezar
## Pre-requisitos del sistema
1.	Node v16.x
2.	NPM v8.x
3.  Instalar extensión de Visual Studio Code EsLint: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
3.  Nodemon para facilidad de autoiniciar la aplicación en modo desarrollo

# Ejecución del template
Esta guía cuenta con la implementación de un endpoint para el consumo del servicio de short-balance, el cuál sirve de base para implementar los servicios necesario según el fin 
necesitado.
<br>IMPORTANTE: 
1. Mantener la implementación del `src/infraestructure/http/api-gw-custom-http`. Este asegura el correcto consumo de los servicios internos que van hacia el Api Gateway, asegúrese de referenciar correctamente el certificado y las credenciales en el archivo de configuración para su correcto funcionamiento.
2. Mantener la implementación de splunk, esta cuenta con un manejador de excepciones que controla cualquier tipo de error y lo envía a Splunk con toda la información técnica del error.

## Pasos
Una vez cumplido los prerequisitos anteriormente mencionados. Continuar:
1. Ejecutar comando `npm i`
2. En caso de estar en SO Windows: `npm i -g win-node-env` 
3. Agregar certificado `.p12` asociado al proyecto que es otorgado por Puntos Colombia en la ruta `src/config/certs/*.p12`.
4. Agregar las variables de entorno base como lo indica el ejemplo en el archivo `.env.example` y eliminar el `.example`, las variables de entorno por seguridad no hacen parte del versionamiento.
5. Ejecutar comando `npm run start`
6. En un navegador ir a la ruta `localhost:3000/api/swagger` y probar la aplicación.

## Comandos disponibles
- `npm run start`: Ejecución de la aplicación en modo release
- `npm run start:dev` Ejecución de la aplicación con nodemon en modo desarrollo
- `F5` Debug de la aplicación con la configuración ya predefinida para Visual Studio Code en el archivo `.vscode/launch.json`
- `npm run lint` Revisión completa de la aplicación mediante el uso de ESLINT.
- `npm run test` Ejecución de pruebas unitarias y de integración
- `npm run test:unit` Ejecución de pruebas unitarias 
- `npm run test:e2e` Ejecución de pruebas de integración

## Recomendaciones
1.  Visualizar los archivos `src/web-api/controllers/health-controller.js` y `src/web-api/controllers/users-controller.js` donde se encuentra ejemplo de documentación básica para la generación automática del swagger.
2. Agregar los schemas (definitions) de los swagger en el archivo ubicado en la raíz `swagger.js` para minimizar longitud de archivos en cada controller. Ver ejemplo en dicho archivo línea 35, schema `GetBalance` y su respectiva referenciación en `src/web-api/controllers/users-controller.js`

# Dudas e inquietudes
Si se presenta alguna duda ante la línea base implementada, por favor evite realizar cambios y comuníquese con cualquier persona del equipo de Arquitectura de Puntos Colombia para solucionar las preguntas necesarias.