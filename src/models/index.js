const Users = require("./Users");
const Blogs = require("./Blogs");
const Comments = require("./Comments");

Blogs.belongsTo(Users, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Users.hasMany(Blogs, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comments.belongsTo(Blogs, {
  foreignKey: "blogs_id",
});

Blogs.hasMany(Comments, {
  foreignKey: "blogs_id",
  onDelete: "CASCADE",
});

module.exports = {
  Blogs,
  Users,
  Comments,
};
