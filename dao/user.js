const { use } = require("express/lib/application");
const db = require("../db/db");

class UserDAO {
  async createUser(name, email) {
    const [id] = await db("users").insert({ name, email }).returning("id");
    return id;
  }
  async getUsers() {
    const users = await db.select("*").from("users").returning("*");
    return users;
  }
}

module.exports = new UserDAO();
