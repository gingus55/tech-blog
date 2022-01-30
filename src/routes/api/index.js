const { Router } = require("express");

const {
  createBlog,
  createComment,
  deleteBlogById,
} = require("../../controllers/api");

const router = Router();

router.post("/blog", createBlog);
router.post("/comment", createComment);

router.delete("/blog/:id", deleteBlogById);

module.exports = router;
