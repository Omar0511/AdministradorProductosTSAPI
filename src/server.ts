import express from 'express';
import router from './router';
import db from './config/db';

// Conectar a BD
async function connectDB() {
  try {
    await db.authenticate();
    db.sync();
  } catch (error) {
    console.log('Error al conectar a la BD:', error);
  }
};
connectDB();

const server = express();

server.use('/api/products', router);

export default server;