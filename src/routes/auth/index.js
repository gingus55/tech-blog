const { Router } = require("express");

const { login, signup, logout } = require("../../controllers/auth");

const router = Router();

router.post("/login", login);
router.post("/sign-up", signup);
router.post("/logout", logout);

module.exports = router;
