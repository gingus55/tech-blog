const { Router } = require("express");

const {
  renderDashboard,
  renderBlogs,
  renderBlogById,
  createComment,
} = require("../../controllers/view/privateController");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/blogs", renderBlogs);

router.get("/blogs/:id", renderBlogById);
router.put("/edit/blog/:id", createComment);

// router.get("/blogs/:id/comments")

module.exports = router;
