const User = require("./User");
const Blog = require("./Blog");

User.hasMany(Blog, { foreignKey: "user_id" });
Blog.belongsToMany(User);

module.exports = {
  User,
  Blog,
};
