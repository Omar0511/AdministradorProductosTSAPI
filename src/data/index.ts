import colors from 'colors';
import { exit } from 'node:process';
import db from '../config/db';

const clearDB = async () => {
  try {
    await db.sync({ force: true });
    console.log(colors.bgGreen.black('Base de datos limpiada y sincronizada correctamente'));
    exit(0);
  } catch (error) {
    console.log(colors.bgRed.white(`Error al limpiar la base de datos: ${error}`));
    exit(1);
  }
};

if (process.argv[2] === '--clear') {
  clearDB();
}