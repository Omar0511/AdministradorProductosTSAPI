import express from 'express';
import router from './router';
import db from './config/db';
import colors from 'colors';


// Conectar a BD
export async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
    // console.log(colors.bgGreen.white('Conectado a la BD'));
  } catch (error) {
    // console.log('Error al conectar a la BD:', error);
    console.log(colors.bgRed.white(`Error al conectar a la BD: ${error}`));
  }
};
connectDB();

// Instancia de express
const server = express();

// Leer datos de FORMULARIOS - Middlewares
server.use(express.json());

server.use('/api/products', router);

server.get('/api', (req, res) => {
  res.json({ msg: 'API de Productos funcionando' });
});

export default server;