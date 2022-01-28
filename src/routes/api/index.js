const { Router } = require("express");
const { createBlog, createComment } = require("../../controllers/api");

const router = Router();

router.post("/blog", createBlog);
router.post("/comment", createComment);

module.exports = router;
