const Comments = require("../models/Comments");

const commentData = [
  {
    content: "boo to you",
    blogs_id: 1,
  },
  {
    content: "i don't like this",
    blogs_id: 1,
  },
  {
    content: "wella wella wellla",
    blogs_id: 2,
  },
  {
    content: "boo to you",
    blogs_id: 3,
  },
  {
    content: "boo to you",
    blogs_id: 3,
  },
  {
    content: "boo to you",
    blogs_id: 5,
  },
  {
    content: "boo to you",
    blogs_id: 4,
  },
  {
    content: "boo to you",
    blogs_id: 4,
  },
  {
    content: "boo to you",
    blogs_id: 7,
  },
  {
    content: "boo to you",
    blogs_id: 6,
  },
  {
    content: "boo to you",
    blogs_id: 3,
  },
  {
    content: "boo to you",
    blogs_id: 7,
  },
  {
    content: "boo to you",
    blogs_id: 6,
  },
  {
    content: "boo to you",
    blogs_id: 7,
  },
  {
    content: "boo to you",
    blogs_id: 5,
  },
  {
    content: "boo to you",
    blogs_id: 2,
  },
];

const seedComments = () => Comments.bulkCreate(commentData);

module.exports = seedComments;
