const { getPayloadWithValidFieldsOnly } = require("../../helpers");
const { Comments } = require("../../models");

const createBlog = () => {};

const createComment = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["comment", "blogs_id"],
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
