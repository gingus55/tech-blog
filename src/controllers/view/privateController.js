const renderDashboard = (req, res) => {
  res.render("dashboard");
};

const renderBlogs = (req, res) => {
  res.render("blogs");
};

const renderBlogById = (req, res) => {
  res.render("blogs by Id");
};

module.exports = {
  renderDashboard,
  renderBlogs,
  renderBlogById,
};
