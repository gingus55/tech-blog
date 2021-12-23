const { Users } = require("../models");

const userData = [
  {
    user_name: "user1",
    password: "password1",
  },
  {
    user_name: "user2",
    password: "password2",
  },
  {
    user_name: "user3",
    password: "password3",
  },
  {
    user_name: "user4",
    password: "password4",
  },
  {
    user_name: "user5",
    password: "password5",
  },
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;
