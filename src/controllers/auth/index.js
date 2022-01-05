const { getPayloadWithValidFieldsOnly } = require("../../helpers");
const Users = require("../../models/Users");

const login = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["user_name", "password"],
      req.body
    );

    if (Object.keys(payload).length !== 2) {
      return res.status(400).json({
        success: false,
        error: "Please provide valid fields in post body",
      });
    }

    const user = await Users.findOne({ where: { email: payload.email } });

    if (!user) {
      return res.status(404).json({
        success: false,
        error: "User does not exist",
      });
    }

    const validPassword = await user.checkPassword(payload.password);

    if (!validPassword) {
      return res.status(401).json({
        success: false,
        error: "User not authorized",
      });
    }

    const userInSession = {
      id: user.get("id"),
      email: user.get("email"),
      firstName: user.get("first_name"),
      lastName: user.get("last_name"),
    };

    req.session.save(() => {
      req.session.loggedIn = true;
      req.session.user = userInSession;

      return res.json({ success: true, data: "Login successful" });
    });
  } catch (error) {
    console.log(`[ERROR]: Login user failed | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to login user" });
  }
};

const signup = async (req, res) => {
  try {
    const payload = getPayloadWithValidFieldsOnly(
      ["user_name", "email", "password", "first_name", "last_name"],
      req.body
    );

    if (Object.keys(payload).length !== 5) {
      return res.status(400).json({
        success: false,
        error: "Please provide valid fields in post body",
      });
    }

    await User.create(payload);

    return res.json({ success: true, data: "Successfully created a user" });
  } catch (error) {
    console.log(`[ERROR]: Create user failed | ${error.message}`);
    return res
      .status(500)
      .json({ success: false, error: "Failed to create user" });
  }
};

const logout = (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      return res.json({ success: true, data: "Successfully logged out" });
    });
  } else {
    return res.status(404).json({
      success: false,
      error: "Cannot logout when you are not logged in",
    });
  }
};

module.exports = {
  login,
  logout,
  signup,
};
