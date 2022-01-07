const Blogs = require("../../models/Blogs");
const Comments = require("../../models/Comments");
const Users = require("../../models/Users");

const renderDashboard = (req, res) => {
  res.render("dashboard");
};

const renderBlogs = (req, res) => {
  res.render("blogs");
};

const renderBlogById = async (req, res) => {
  try {
    const { loggedIn } = req.session;
    const blogId = await Blogs.findByPk(req.params.id, {
      include: [{ model: Comments }],
    });
    const blogData = blogId.dataValues;
    res.render("blogs", { loggedIn, blogData });
  } catch (err) {
    res.status(500).json(err);
  }
};

const createComment = async (req, res) => {
  console.log("hi");
};

module.exports = {
  renderDashboard,
  renderBlogs,
  renderBlogById,
  createComment,
};
