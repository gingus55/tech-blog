const { Router } = require("express");

const {
  renderDashboard,
  renderBlogs,
} = require("../../controllers/view/privateController");

const router = Router();

router.get("/dashboard", renderDashboard);
router.get("/blogs", renderBlogs);

module.exports = router;
