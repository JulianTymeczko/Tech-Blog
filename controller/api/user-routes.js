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
    return res.status(401).json({ message: "Incorrect username or password." });
  }

  req.session.save(() => {
    req.session.loggedIn = true;

    res.status(200).json({ user: userData, message: "Login successful" });
  });
});

// Signup
router.post("/signup", async (req, res) => {
  const newUserData = {
    username: req.body.username,
    password: req.body.password,
  };
  const newUser = await User.create(newUserData);
  if (!newUser) {
    return res.status(500).json({ message: "Failed to create new user" });
  }
  res.status(200).json();
});

// Logout
router.post("/logout", (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;
