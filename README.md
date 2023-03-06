
# Curso Backend - Proyecto Final
## Piotti Rafael | Ecommerce Web HAMBURBACK



## rutas de busqueda
- /productos es la ruta /main
- Para buscar producto por id es /productos/id/:id
- Para buscar producto por cat es /productos/:categoria
- Para buscar carrito por id es /api/carrito/id/:id

## rutas de chat 
 - http://localhost:8081/chat

## Como ejecutar el proyecto en tu pc
- Antes que nada debes tener instalado en tu pc node.js, debes tener una cuenta en mognodb atlas, y una cuenta de gmail configurada con contraseñas para aplicacion
para poder testear los emails
- Debes clonar el repositorio
- Abrir una terminal y en ella dirigirte a la carpeta con el nombre del proyecto
- Ejecutar el comando ``` npm install ```
- Deves configurar un archivo ``` .env ``` con los siguientes datos
    ```
        NODE_ENV = 'development/production'
        MAIL = 'xxxx@gmail.com'
        MONGO_URL = 'mongodb+srv://xxx'
        SECRET = 'xxx'
        HOST = xxxx
        PORT = xxxx
        DEBUG = xxxx

    ```

## Proyecto Online
- El proyecto se encuntra funcionando en la siguiente url https://hamburback-production.up.railway.app/login 