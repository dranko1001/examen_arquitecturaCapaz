## BITACORA DEL PROYECTO

# HERRAMIENTAS DEL BACK

Gestor DB: MYSQL - Maria DB

express: framework node js => Gestionar APIS usando protocolo HTTP
node js: js standalone - insta en mi pc --> en consoloa: node -v
nodemon: plugin para usar en desarrollo - NO se usa en produccion
-- produccion => se depliega en la nube -- desarrollo => se trabaja en la nueva version de produccion
mysql2: gestionar las interacciones con la bd - orm (sequelize)
cors: plugin para la gestion de CORS
env: variables globales del proyecto (credenciales, rutas)

# HERRAMIENTAS FRONT

CSS: Framework Bootstrap
BUNDLER: Vite  --(webpack)
vanilla js

## PASO A PASO BACKED

- Iniciar el proyecto con node js (npm init)
- Instalar los paquetes requeridos (npm install nodemon mysql2 cors env express)
- Configurar el control de versiones del codigo:  crear el .gitignore
- iniciar el seguimiento de repositorio git init, git add .,
- Creamos el repo en la nube +: github
- Conectamos el repo de la nube con el repo local:
- git remote add origin  https://github.com/CristianBesto/interpolice.git
- hacemos la primer actualizacion local y remota:
loca: git commit . -m "Inicio del proyecto"
remota: git push -u origin master
- revision del package.json: verificar las dependencias
- modificamos el package.json para ejecucion del proyecto:
    "start": "node index.js", <-----este es modo produccion/despliegue
    "dev": "nodemon index.js", <---- este es desarrollo developer

## CODIFICACION DEL PROYECTO

-Crear el archivo principal: index.js
-Corremos el servidor en la consola: npm run dev
-Configurar los plugins : nodemon, cors, hacer la primera prueba npm run dev(modo desarrollador), npm start (modo produccion)

## Creacion del modulo conexion a la base de datos

-Importamos la libreria mysql2 y hacemos la conexion a la base de datos de acuerdo al ejmplo




 
## codificcacion del modulo ciudadano

## implementacion de arquitectura por capas (n-tier)
CONTROLLER: controlador del modulo, maneja la logica de peticiones y respuestas
ROUTES: se encarga de construir los ebndpoints o rutas de api, en ella podemos inyectar los middlewares 
MODELS: Se encarga de la interaccion(consultas) con el SGBD, implementa la logica del negocio;
CAPAS DE SOPORTE:
MIDDLEWARE: CAPA INTERMEDIA ENTRE EL CLIENTE Y LA API (ejemplo: validar token, validar ip por cors) 
HELPERS:ayudas, ayudantes, clases o funciones reusables del sistema, por ejemplo un sistema de errores

## CONFIGURACION DE VARIABLES DE ENTORNO /GLOBALES
Sirven para mejorar la confidencialidad, mejor mantebilidad
en node js: variables.env
instalar el paquete dotenv y configurarlo (nota nodejs ya lo implementa nativo0
- npm i dotenv)
- crear archivo .env en la raiz del proyecto
- ver el ejemplo de archivo .env
