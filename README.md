# Proyecto: Administrador de Productos REST API

  - Creación del proyecto:
    - **_npm init_**
  - Nos aparecerán unas opciones, las dejamos como en el ejemplo:
    - package name: (administrador-productos) rest-api-node-ts-server
    - version: (1.0.0)
    - description: REST API'S con Express y TypeScript
    - entry point: (index.js)
    - test command:
    - git repository:
    - keywords:
    - author: Omar Garcia
    - license: (ISC)
    - type: (commonjs)
    - ```
      {
        "name": "rest-api-node-ts-server",
        "version": "1.0.0",
        "description": "REST API'S con Express y TypeScript",
        "main": "index.js",
        "scripts": {
          "test": "echo \"Error: no test specified\" && exit 1"
        },
        "author": "Omar Garcia",
        "license": "ISC",
        "type": "commonjs"
      }
    ```
    - Is this OK? (yes) yes
  - En el archivo:
    - **package.json**
  - Debemos agregar la línea:
    - **_"types": "module"_**

## Herramientas y/o Tecnologías

- PERN
  - PostgreSQL
    - También llamado _Postgres_, es un sistema de gestión de bases de datos relacional orientado a objetos y de código abierto.
    - Para interactuar con nuestra base de datos podemos hacerlos por medio de un _ORM_.
    - Un _ORM_ tiene todos los métodos para: **crear, obtener, actualizar, eliminar** datos de nuestra base de datos.
  - Express
    - **_npm i express_**
    - **_npm i -D @types/express_**
    - Infraestructura _web_ rápida, minimalista y flexible para _Node.js_.
    - A diferencia de _Rails o Laravel_ no tiene un sistema de vistas definido, tampoco _ORM_ o _Autenticación_; sino que te deja mucha parte de la configuración en tus manos.
    - Ideal para utilizarse en aplicaciones _web_ monolíticas o como _API_.
  - React
    - _Framework_ de _JavaScript_.
  - Node
    - **_npm init_**
    - **_npm i -D typescript ts-node_**
    - **_npm i -D tsx_**
    - **_npm i -D nodemon_**
  - Para probar y ejecutar un archivo con _Node_:
    - **_npx tsx src/index.ts_**
    - En el archivo:
      - **package.json**
    - Debemos agregar la línea:
      - **_"types": "module"_**
    - En el mismo archivo, para configurar _NODEMON_ y que lea el contenido de los archivos, debemos configurar lo siguiente:
      - ```
        "scripts": {
          "dev": "nodemon --exec tsx src/index.ts"
        },
      ```
    - Ejecutamos:
      - **_npm run dev_**
    - Entorno de ejecución en _JavaScript_ que se ejecuta en el servidor.
    - Entre sus ventajas se encuentra la gran cantidad de librerías disponibles para integrarlas en proyectos con _NPM_.
    - Puede consultar base de datos, autenticar usuarios, manejar rutas y mucho más...
  ## Ventjas
    - Separación de _Backend - Frontend_.
    - Comunicación entre _Backend - Frontend_ con **JSON** y peticiones **HTTP**.
    - _NPM_ con una gran cantidad de dependencias.
    - Solo código de _JavaScript/TypeScript_ para crear aplicaciones _FULL STACK_.
- TypeScript
- TailwindCSS
- Vite
- ORM
  - Sequelize
    - **_npm install --save sequelize_**
    - **_npm install --save pg pg-hstore_**
    - **_npm i sequelize-typescript_**
    - _https://sequelize.org/docs/v6/getting-started/_
    - Soporta _TypeScript_ y diferentes bases de datos.
    - _Oracle, Postgres, MySQL, MariaDB, SQLite, SQL SERVER_.
    - También soporta relaciones de información, _lazy loading, eager loading_ y más.
- Render
  - _https://dashboard.render.com/_
  - Es donde creamos la **Base de datos**.
- DOTENV
  - **_npm i dotenv_**
  - Variables de entorno.
- Colores para mensajes de CONSOLA
  - **_npm i colors_**
- Validaciones - Express Validator
  - **_npm i express-validator_**

### REST API

- Es un conjunto de reglas que permite que aplicaciones se comuniquen entre sí a través de la web.
- REST = Representational State Transfer.
- Puede ser diseñada en cualquier lenguaje.
- Debe responder a los _Request: HTTP: GET, POST, PUT, PATCH, DELETE._
- Tiene una forma ordenada y estructurada de poner a disposición los recursos de una base de datos.
- GET: Obtener datos.
  - Listar todos los clientes
    - **/clientes**
  - Obtener un solo cliente
    - **/clientes/10**
- POST: Enviar datos / Creación.
  - Crear un nuevo cliente
    - **/clientes**
- PUT / PATCH: Actualización.
  - Editar un cliente
    - **clientes/3**
- DELETE: Eliminar.
  - Borrar un cliente
    - **/clientes/8**
- ## Ventajas
  - Simplicidad de creación.
  - Es una forma escalable y ordenada de crear un proyecto.
  - Facilidad de uso y se pueden consumir en:
    - React
    - Angular
    - Vue.js
    - Flutter
    - Kotlin
    - Swift
- ### Herramientas
  - Cualquier lenguaje de programación que se ejecute en el servior puede servir para crear una _REST API_: **Python, PHP, Java, C#, etc**.
  - Muchos frameworks soportan la creación de _REST API'S_ y simplifican mucho este proceso entre ellos: _Laravel, Express, Rails, Django_.
  - Una base de datos como: _MySQL, PostgreSQL, MONGODB_.

### Notas

- Un _STack_ es un conjunto de herramientas para crear una app.
- _Full Stack_ quiere decir que puedes crear el _Stack_ completo de una _App_ y _PERN STACK_ te permite hacerlo.
- _React_ en el _FRONT_ y _Node_ en el _backend_ son una combinación muy común.
- Puede utilizar _React_ con _Backends_ de _Django, Rails, Laravel_.
- Debemos crear el archivo:
  - **tsconfig.json**
- Dentro agregamos lo siguiente:
  - ```
    {
      "compilerOptions": {
        "outDir": "./dist",
        "rootDir": "./src",
        "lib": ["esnext"],
        "strict": false,
        "sourceMap": true,
        "esModuleInterop": true,
        "declaration": true,
      },
      "include": ["src/**/*.ts"]
    }
  ```
- Y debemos ejecutar:
  - **_npx tsc_**
- Esto para que _NODE y EXPRESS_, pueden leer los archivos: **.ts** y los compilen a **.js**, con esta configuración.

#### ORM

- Un _ORM_ simplifica la comunicación entre una base de datos y el código de tu aplicación.
- En lugar de escribir consultas de _SQL_ escribes funciones que son bastante similares a el código que ya escribes.
  - ## VENTAJAS
    - **Abstracción**
      - Esto significa que puedes interactuar con la base de datos usando objetos, clases y métodos en lugar de escribir consultas _SQL_ complicadas.
    - **Portabilidad**
      - Puedes cambiar de un sistema de gestión de base de datos a otro sin tener que reescribir todo tu código.
    - **Productividad**
      - El _ORM_ se encarga de tareas repetitivas como la generación de consultas _SQL_, lo que te permite enfocarte en la lógica de tu aplicación.
  - ### CONSIDERACIONES
    - Debe estar en desarollo de forma activa.
    - Un _ORM_ asegura la entrada de la información pero siempre debes validar.
    - Cambiar de _ORM'S_ puede no ser tan simple, elige con cuidado antes de iniciar un proyecto.
- _ORM'S_
  - Mongoose
  - Prisma
  - Sequelize
  - TypeORM

## MIDDLEWARE

- En _Node.js_, el _middleware_ se refiere a un tipo de _software_ intermedio que se utiliza para procesar las solicitudes _HTTP_ que llegan a una aplicación _web_ antes de ser manejadas por la función de enrutamiento principal.
- Los _middleware_ son funciones que se ejecutan en el medio del flujo de solicitud y respuesta de una aplicación _web_ y pueden realizar diversas tareas, como autenticación, validación de datos, registro de solicitudes, compresión de respuestas, entre otras.
- Son esencials para la creación de aplicaciones _web_ robustas y flexibles.
- Cada solicitud _HTTP_ pasa a través de una serie de _middleware_ antes de llegar a la función de controlador que maneja la solicitud final.
- Esto permite modularizar y organizar el código de manera efectiva, ya que puedes agregar o quitar _middleware_ según las necesidades de tu aplicación.

