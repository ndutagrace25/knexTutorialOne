const userDAO = require("../dao/user");

class UserController {
  createUser(userDetails) {
    const { name, email } = userDetails;
    return userDAO.createUser(name, email);
  }
  getUsers() {
    return userDAO.getUsers();
  }
}

module.exports = new UserController();
