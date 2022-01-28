const { Comments } = require("../../models");
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

    let blogData = await Blogs.findAll({
      include: [{ model: Comments, as: "comments" }],
    });
    blogData = blogData.map((each) => {
      return each.get({ plain: true });
    });

    // console.log(blogData);

    res.render("home", { loggedIn, blogData });
  } catch (err) {
    res.status(500).json(err);
  }
};

module.exports = {
  renderLogin,
  renderSignUp,
  renderHome,
};
