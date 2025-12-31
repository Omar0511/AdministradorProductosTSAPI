import express from 'express';
import router from './router';
import db from './config/db';
import colors from 'colors';
import swaggerUi from 'swagger-ui-express';
import swaggerSpec, { swaggerUiOptions } from './config/swagger';
import cors, { CorsOptions } from 'cors';
import morgan from 'morgan';

// Conectar a BD
export async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    console.log(colors.bgGreen.white('Conectado a la BD'));
  } catch (error) {
    // console.log('Error al conectar a la BD:', error);
    console.log(colors.bgRed.white(`Error al conectar a la BD: ${error}`));
  }
};
connectDB();

// Instancia de express
const server = express();

// // Permitir conexiones
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    console.log(`Origin: ${origin}`);
    
    if (origin === process.env.FRONTEND_URL) {
      // console.log("Permitir...");

      callback(null, true); // permitir todos
    } else {
      // console.log("Denegar...");

      callback(new Error('Error de CORS'));
    }

  }
};

server.use(cors(corsOptions));


// const corsOptions: CorsOptions = {
//   origin: (origin, callback) => {
//     console.log("Origin:", origin);

//     if (!origin) {
//       return callback(null, true); // OPTIONS, Postman
//     }

//     if (origin === process.env.FRONTEND_URL) {
//       return callback(null, true);
//     }

//     callback(new Error("Not allowed by CORS"));
//   },
// };

// server.use(cors(corsOptions)); // ✅ suficiente
// server.use(express.json());

// 🔥 CORS SIEMPRE PRIMERO
// server.use(cors());

// 🔥 Responder preflight explícitamente
// server.options("*", cors());

server.use(cors());

// Leer datos de FORMULARIOS - Middlewares
server.use(express.json());

server.use(morgan('dev'));

server.use('/api/products', router);

// server.get('/api', (req, res) => {
//   res.json({ msg: 'API de Productos funcionando' });
// });

// Docs
server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec, swaggerUiOptions));


export default server;