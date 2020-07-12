const usersControllers = require("../controllers/users");

module.exports = function (app) {
  app.get("/users", usersControllers.getUsersController);
};
