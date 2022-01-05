const Blogs = require("../../models/Blogs");

const renderDashboard = (req, res) => {
  res.render("dashboard");
};

const renderBlogs = (req, res) => {
  res.render("blogs");
};

const renderBlogById = async (req, res) => {
  try {
    const { loggedIn } = req.session;

    const blogId = await Blogs.findByPk(req.params.id);

    res.render("blogs", { loggedIn, blogId });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  renderDashboard,
  renderBlogs,
  renderBlogById,
};
