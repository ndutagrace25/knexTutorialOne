const userService = require("../service/user");

class UserController {
  async createUser(req, res) {
    try {
      const id = await userService.createUser(req.body);
      res.status(201).json(id);
    } catch (err) {
      console.log(err);
      res.status(400).json({error: 'something went wrong'})
    }
  }
  async getUsers(req, res){
    try {
      const users = await userService.getUsers();
      res.status(200).json(users)
    }catch (err){
      res.status(400).json({error: 'something went wrong'})
    }
  }
}

module.exports = new UserController();
