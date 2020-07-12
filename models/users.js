const { knex } = require("../utils/dbConnection");

async function getAllUsers(query, callBack) {
  try {
    let data = await knex("users")
      .limit(query.size)
      .offset(query.page - 1);
    let total = await knex("users").count("id");
    callBack(null, { users: data, total: total[0].count });
  } catch (err) {
    callBack(err, null);
  }
}

module.exports = {
  getAllUsers,
};
