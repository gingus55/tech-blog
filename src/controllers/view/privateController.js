const renderDashboard = (req, res) => {
  res.render("dashboard");
};

const renderBlogs = (req, res) => {
  res.render("blogs");
};

module.exports = {
  renderDashboard,
  renderBlogs,
};
