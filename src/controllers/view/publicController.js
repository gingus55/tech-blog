const Blogs = require("../../models/Blogs");

const renderLogin = (req, res) => {
  res.render("login");
};

const renderSignUp = (req, res) => {
  res.render("signup");
};

const renderHome = async (req, res) => {
  try {
    const { loggedIn } = req.session;

    const blogData = await Blogs.findAll();
    const mapped = blogData.map((each) => {
      return each.get({ plain: true });
    });

    res.render("home", { loggedIn, mapped });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  renderLogin,
  renderSignUp,
  renderHome,
};
