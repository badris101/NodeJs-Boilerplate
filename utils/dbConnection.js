module.exports.knex = require("knex")({
  client: "postgresql",
  connection: {
    host: "127.0.0.1",
    user: "postgres",
    password: "123456",
    database: "test_db_tajine",
  },
});
