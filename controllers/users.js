const Joi = require("@hapi/joi");
const { responseHandler } = require("../utils/response");
const { getAllUsers } = require("../models/users");
async function getUsersController(req, res) {
  const schema = Joi.object({
    page: Joi.number().min(1).required(),
    size: Joi.number().min(1).required(),
  });

  try {
    await schema.validateAsync(req.query);
    getAllUsers(req.query, (err, data) => {
      responseHandler(res, data, err, 500, 200);
    });
  } catch (err) {
    responseHandler(res, null, err, 400, 400);
  }
}

module.exports = { getUsersController };
