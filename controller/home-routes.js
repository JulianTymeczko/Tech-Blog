const router = require("express").Router();
router.get("/", async (req, res) => {
  res.render("home");
});

router.get("/dashboard", async (req, res) => {
  res.render("dashboard");
});

router.get("/login", async (req, res) => {
  res.render("Login");
});

router.get("/Log-Out", async (req, res) => {
  res.render("Log-Out");
});
router.get("/Sign-Up", async (req, res) => {
  res.render("SignUp");
});

router.get("/", async (req, res) => {
  const Data = [
    {
      User: "dwadwawad",
    },
  ];
  res.render("home", { Data });
});

module.exports = router;
