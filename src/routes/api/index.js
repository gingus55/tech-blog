const { Router } = require("express");
const auth = require("registry-auth-token");
const {
  createBlog,
  createComment,
  deleteBlogById,
} = require("../../controllers/api");

const router = Router();

router.post("/blog", createBlog);
router.post("/comment", createComment);

router.delete("/blog/:id", auth, deleteBlogById);

module.exports = router;
