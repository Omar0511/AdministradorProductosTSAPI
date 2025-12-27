import { Sequelize } from "sequelize";

// const db = new Sequelize(
//   "postgresql://rest_api_node_typescript_8725_user:JMdsBgTr2RakAszCcl8bQm9UbLD7iG9s@dpg-d57m3be3jp1c73b257k0-a.virginia-postgres.render.com/rest_api_node_typescript_8725"
// );

const db = new Sequelize(
  "postgresql://rest_api_node_typescript_8725_user:JMdsBgTr2RakAszCcl8bQm9UbLD7iG9s@dpg-d57m3be3jp1c73b257k0-a.virginia-postgres.render.com/rest_api_node_typescript_8725?ssl=true",
  {
    dialectOptions: {
      ssl: {
        require: true,
      },
    },
  }
);

export default db;