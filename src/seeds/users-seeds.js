const Users = require("../models/Users");

const userData = [
  {
    user_name: "user1",
    email: "user1@me.com",
    password: "password1",
    first_name: "use1",
    last_name: "name1",
  },
  {
    user_name: "user2",
    email: "user2@me.com",
    password: "password2",
    first_name: "use2",
    last_name: "name2",
  },
  {
    user_name: "user3",
    email: "user3@me.com",
    password: "password3",
    first_name: "use3",
    last_name: "name3",
  },
  {
    user_name: "user4",
    email: "user4@me.com",
    password: "password4",
    first_name: "use4",
    last_name: "name4",
  },
  {
    user_name: "user5",
    email: "user5@me.com",
    password: "password5",
    first_name: "use5",
    last_name: "name5",
  },
];

const seedUsers = () => Users.bulkCreate(userData);

module.exports = seedUsers;
