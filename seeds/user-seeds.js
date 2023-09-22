const { User } = require("../models");

const userData = [
  { username: "Jeff99", password: "123456" },
  { username: "kelvin", password: "0k" },
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;
