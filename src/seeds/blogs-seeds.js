const Blogs = require("../models/Blogs");

const blogData = [
  {
    title: "bloggy1",
    content: "this is my first blog",
    user_id: 1,
  },
  {
    title: "bloggy2",
    content: "this is my second blog",
    user_id: 1,
  },
  {
    title: "bloopy",
    content: "this is my first blog",
    user_id: 2,
  },
  {
    title: "foo bar",
    content: "this is my foo bar",
    user_id: 3,
  },
  {
    title: "boggly mind 1",
    content: "this is my first blog",
    user_id: 4,
  },
  {
    title: "bloggy sequel",
    content: "this is my second second blog",
    user_id: 4,
  },
  {
    title: "fifth blogger",
    content: "this is my 5first blog",
    user_id: 5,
  },
  {
    title: "fifth bloggers 2nd",
    content: "this is my 5 5 5 second blog",
    user_id: 5,
  },
];

const seedBlogs = () => Blogs.bulkCreate(blogData);

module.exports = seedBlogs;
