const Blogs = require("../../models/Blogs");
const Comments = require("../../models/Comments");
const Users = require("../../models/Users");

const renderDashboard = async (req, res) => {
  try {
    const { loggedIn, user } = req.session;
    console.log(req.session);
    console.log(user);
    console.log(loggedIn);
    let blogData = await Blogs.findAll({
      include: [{ model: Comments, as: "comments" }],
      where: {
        user_id: user.id,
      },
    });
    blogData = blogData.map((each) => {
      return each.get({ plain: true });
    });

    console.log(blogData);

    res.render("dashboard", { loggedIn, blogData });
  } catch (err) {
    res.status(500).json(err);
  }
};

const renderBlogs = async (req, res) => {
  try {
    const { loggedIn, user } = req.session;
    // console.log(req.session);
    // console.log(user);
    // console.log(loggedIn);
    let blogData = await Blogs.findAll({
      include: [{ model: Comments, as: "comments" }],
    });
    blogData = blogData.map((each) => {
      return each.get({ plain: true });
    });

    console.log(blogData);

    res.render("blogs", { loggedIn, blogData });
  } catch (err) {
    res.status(500).json(err);
  }
};

const renderBlogById = async (req, res) => {
  try {
    const { loggedIn } = req.session;

    let blogData = await Blogs.findByPk(req.params.id, {
      include: [{ model: Comments }],
    });
    blogData = blogData.get({ plain: true });

    // const blogData = blogId.dataValues;
    res.render("comment", { loggedIn, blogData });
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
