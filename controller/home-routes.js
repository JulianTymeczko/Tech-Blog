const router = require("express").Router();
const { Blog, User } = require("../models");

router.get("/", async (req, res) => {
  const data = (await Blog.findAll({ include: User })).map((blog) => {
    return {
      paragraph: blog.paragraph,
      user: blog.user.username,
      date: blog.date,
      title: blog.title,
    };
  });
  res.render("home", { data, loggedIn: req.session.user });
});

router.get("/dashboard", async (req, res) => {
  if (!req.session.user) {
    return res.redirect("/login");
  }

  res.render("dashboard", { loggedIn: req.session.user });
});

router.get("/login", async (req, res) => {
  res.render("Login", { loggedIn: req.session.user });
});

router.get("/Log-Out", async (req, res) => {
  res.render("Log-Out", { loggedIn: req.session.user });
});
router.get("/Sign-Up", async (req, res) => {
  res.render("SignUp", { loggedIn: req.session.user });
});

module.exports = router;
