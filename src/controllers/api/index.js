const { getPayloadWithValidFieldsOnly } = require("../../helpers");
const { Comments, Blogs } = require("../../models");

const createBlog = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["title", "content"],
      req.body
    );

    console.log(req.session);
    payload.user_id = req.session.user.id;
    console.log(payload);

    if (Object.keys(payload).length !== 3) {
      return res.status(400).json({
        success: false,
        error: "Please provide valid fields in post body",
      });
    }

    await Blogs.create(payload);

    return res.json({ success: true, data: "Successfully created a blog" });
  } catch (error) {
    console.log(`[ERROR]: Create blog failed | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to post a blog" });
  }
};

const createComment = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["content", "blogs_id"],
      req.body
    );

    console.log(payload);

    if (Object.keys(payload).length !== 2) {
      return res.status(400).json({
        success: false,
        error: "Please provide valid fields in post body",
      });
    }

    await Comments.create(payload);

    return res.json({ success: true, data: "Successfully created a comment" });
  } catch (error) {
    console.log(`[ERROR]: Create comment failed | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to post a comment" });
  }
};

module.exports = { createBlog, createComment };
