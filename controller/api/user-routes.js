const router = require("express").Router();
const { User } = require("../../models");
// Login
router.post("/login", async (req, res) => {
  const userData = await User.findOne({
    where: { username: req.body.username },
  });
  if (!userData) {
    return res.status(401).json({ message: "Incorrect username or password." });
  }
  const passwordIsValid = userData.checkPassword(req.body.password);
  if (!passwordIsValid) {
    return res.status(401).json({ message: "Incorrect password." });
  }

  req.session.user = userData.username;
  res.redirect("/");
});

// Signup
router.post("/signup", async (req, res) => {
  const newUserData = {
    username: req.body.username,
    password: req.body.password,
  };
  const newUser = await User.create(newUserData).catch((err) => {
    console.log(err);
  });
  if (!newUser) {
    return res.status(500).json({ message: "Failed to create new user" });
  }
  req.session.user = newUser.username;
  res.redirect("/");
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.user) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).json({ message: "User is not currently logged in." });
  }
});

module.exports = router;
