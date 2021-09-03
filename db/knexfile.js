// Update with your config settings.

module.exports = {
  development: {
    client: "postgresql",
    connection: {
      database: "todos_test",
      user: "postgres",
      password: "r6r5bb!!",
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: "knex_migrations",
    },
  },
};
