const { Blog } = require("../models");

const blogData = [
  {
    user_id: 1,
    paragraph: "I love MVC, it is so cool!",
    title: "My love for MVC",
  },
  {
    user_id: 2,
    paragraph: "I love Sequelize, it is so cool!",
    title: "My love for Sequelize",
  },
];

const seedBlogs = () => Blog.bulkCreate(blogData);

module.exports = seedBlogs;
