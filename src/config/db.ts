import dotenv from "dotenv";
// import { Sequelize } from "sequelize";
import { Sequelize } from "sequelize-typescript";

dotenv.config();
// console.log(process.env.DATABASE_URL);

// const db = new Sequelize(
//   "postgresql://rest_api_node_typescript_8725_user:JMdsBgTr2RakAszCcl8bQm9UbLD7iG9s@dpg-d57m3be3jp1c73b257k0-a.virginia-postgres.render.com/rest_api_node_typescript_8725"
// );

// const db = new Sequelize(
//   "postgresql://rest_api_node_typescript_8725_user:JMdsBgTr2RakAszCcl8bQm9UbLD7iG9s@dpg-d57m3be3jp1c73b257k0-a.virginia-postgres.render.com/rest_api_node_typescript_8725?ssl=true",
//   {
//     dialectOptions: {
//       ssl: {
//         require: true,
//       },
//     },
//   }
// );

// El signo de exclamación le dice a TypeScript que confíe en que esta variable de entorno estará definida
const db = new Sequelize(process.env.DATABASE_URL!, {
  models: [__dirname + '/../models/**/*'], // Ruta a los modelos
  logging: false, // Desactivar logging de SQL
});

export default db;