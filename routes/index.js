const express = require("express");
const { route } = require("express/lib/router");
const userController = require("../controller/user");

const router = express.Router();

router.post("/users", userController.createUser);
router.get("/users", userController.getUsers);

module.exports = router;
