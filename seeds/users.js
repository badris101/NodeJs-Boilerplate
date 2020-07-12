exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("users")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("users").insert([
        { first_name: "hamidi", last_name: "rowValue1" },
        { first_name: "badrissi", last_name: "rowValue2" },
        { first_name: "amini", last_name: "rowValue3" },
      ]);
    });
};
