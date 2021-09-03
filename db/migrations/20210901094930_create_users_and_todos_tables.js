exports.up = function (knex) {
  return knex.schema
    .createTable("users", (table) => {
      table.increments("id");
      table.string("name").notNullable();
      table.string("email").notNullable().unique();
      table.timestamps(true, true);
    })
    .createTable("todos", (table) => {
      table.increments("id");
      table.string("title").notNullable();
      table.integer("user_id").references("id").inTable("users");
      table.boolean("completed").notNullable().defaultTo(false);
      table.timestamps(true, true);
    });
};

exports.down = function (knex) {
  return knex.schema.dropTable("todos").dropTable("users");
};
