/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex("todos").truncate();
  await knex("todos").insert([
    { title: "Clean the room" },
    { title: "Have a lunch" },
    { title: "Meet with friends" },
  ]);
};
